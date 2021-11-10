import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

interface DeleteProps {
  id: number;
}

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}
}
