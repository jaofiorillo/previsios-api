import { Controller, Get } from '@nestjs/common';
import { PrevisionService } from './prevision.service';
import { Public } from 'decorators/decorators';

@Controller('prevision')
export class PrevisionController {
    constructor(private readonly previsionService: PrevisionService) {}

    @Get()
    @Public()
    signIn() {
        return this.previsionService.findAll();
    }
}
