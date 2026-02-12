import { Controller, Get, Query } from '@nestjs/common';
import { PrevisionService } from './prevision.service';
import { Public } from 'decorators/decorators';
import { PrevisionFilters } from './dto/prevision.filter';

@Controller('api/prevision')
export class PrevisionController {
    constructor(private readonly previsionService: PrevisionService) {}

    @Get()
    @Public()
    findAll(@Query() filters: PrevisionFilters) {
        return this.previsionService.findAll(filters);
    }
}
