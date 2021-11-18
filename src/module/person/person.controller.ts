import { LoginProps } from './../../types/index';
import { PersonService } from './person.service';
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post,Request, } from '@nestjs/common';
import { Public } from '../../common/decorators/public.decorator';


// interface DeleteProps {
//   id: number;
// }

@Controller('/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Public()
  @Post('login')
  async login(@Body() body:LoginProps) {
    const res = await this.personService.login(body.tel, body.password);
    if (typeof res === 'string') {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
    return {
      data: res
    }
  }
  
  @Get('userinfo')
  async getUserInfo(@Request() req) {
    const token = req.headers.authorization;
    const res = await this.personService.getUserInfo(token);
    if (typeof res === 'string') {
      throw new HttpException(res, HttpStatus.BAD_REQUEST);
    }
    return {
      data: res
    }
  }

  // @ApiBody({
  //   required: true,
  //   type: TodoEntity,
  // })
  // @Post()
  // async addTask(@Body() body: TodoEntity): Promise<TodoEntity> {
  //   return await this.todoService.add(body);
  // }

  // @ApiQuery({
  //   name: 'id',
  //   required: false,
  //   type: Number,
  // })
  // @Get('/delete/:id')
  // async deleteToDo(
  //   @Param() params: DeleteProps,
  // ): Promise<{ affected: number }> {
  //   const res = await this.todoService.remove(params.id);
  //   return {
  //     affected: res?.affected || 0,
  //   };
  // }
}
