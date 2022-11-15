import { Injectable } from '@nestjs/common';

@Injectable()
export class ToDoService {
    async list() {
        return [{
            task:"A"
        },
        {
            task:"B"
        }]
    }
}
