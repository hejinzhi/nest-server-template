import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from 'src/entity/person.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PersonService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
  ) {}

  async login(username:string, password:string) {
    const res = await this.personRepository.findOne({
      tel: username,
      password,
      disabled: '0',
    });
    if (res) {
      const token = this.genToken({
        id: res.id,
        tel: res.tel,
        name: res.name,
        deptId: res.deptId,
        role: res.role,
      });
      return {
        token,
      };
    } else {
      return '账号密码错误';
    }
  }

  genToken(body: any): string {
    return this.jwtService.sign(body);
  }

  findAll(): Promise<PersonEntity[]> {
    return this.personRepository.find();
  }

  async getUserInfo(token) {
    const to = token.replace('bearer ', '');
    const t = this.jwtService.decode(to) as any;
    const res = await this.personRepository
      .createQueryBuilder('t')
      .where('t.id = :id', { id: t.id })
      .getOne();
    if (res) {
      return {
        id: res.id,
        tel: res.tel,
        name: res.name,
        // deptId: res.deptId,
        // dept: res.dept.name,
        // type: res.dept.type,
        // isSuper: res.isSuper,
        avatar: 'https://cos1.fanshujieyue.com/upload-m/175733957075331820.jpg',
        // roles: res.isSuper ? ['admin'] : [res.role],
        // powers: res.powers,
      };
    } else {
      return 'Token 不正确';
    }
  }

  // async remove(id: number): Promise<UpdateResult> {
  //   return await this.personRepository.update(
  //     { id },
  //     {
  //       isActive: false,
  //     },
  //   );
  // }

  async add(todo: PersonEntity): Promise<PersonEntity> {
    return await this.personRepository.save(todo);
  }
}
