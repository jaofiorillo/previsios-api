import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrevisionEntity } from './prevision.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { PrevisionResponse } from './dto/prevision.response';
import { plainToInstance } from 'class-transformer';
import { PrevisionFilters } from './dto/prevision.filter';

@Injectable()
export class PrevisionService {
    constructor(
        @InjectRepository(PrevisionEntity)
        private readonly repository: Repository<PrevisionEntity>
    ) {}

    async findAll(filters: PrevisionFilters) {
        const query = this.repository
            .createQueryBuilder('prevision')
            .innerJoinAndSelect('prevision.reservoir', 'reservoir');

        this.buildFilters(filters, query);
        const previsions = await query.getMany();

        return previsions.map((prevision) => {
            const response = plainToInstance(PrevisionResponse, prevision, {
                excludeExtraneousValues: true,
            });

            return response;
        });
    }

    private buildFilters(filters: PrevisionFilters, query: SelectQueryBuilder<PrevisionEntity>): void {
        if (filters.reservoirId) {
            query.andWhere('reservoir.id = :reservoirId', {
                reservoirId: filters.reservoirId,
            });
        }

        if (filters.startDate && filters.endDate) {
            const start = new Date(filters.startDate);
            const end = new Date(filters.endDate);
            end.setHours(23, 59, 59, 999);

            query.andWhere('prevision.createdAt BETWEEN :start AND :end', { start, end });
        }
    }
}
