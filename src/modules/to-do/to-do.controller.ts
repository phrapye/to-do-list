import { Controller,HttpCode,Get } from '@nestjs/common';
import { ToDoService } from './to-do.service'
@Controller('to-do')
export class ToDoController {
    constructor(private toDoService: ToDoService) {}
    @Get('list')
    @HttpCode(200)
    async list(){
      const data = await this.toDoService.list();
      return data;
    }
}
