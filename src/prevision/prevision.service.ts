import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrevisionEntity } from './prevision.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrevisionService {
    constructor(
        @InjectRepository(PrevisionEntity)
        private readonly repository: Repository<PrevisionEntity>,
    ) {}

    async findAll(): Promise<PrevisionEntity[]> {
        return await this.repository.find();
    }
}
