import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReservoirEntity } from './reservoir.entity';
import { CityEntity } from 'city/city.entity';
import { LevelReservoirEntity } from 'level_reservoir/level-reservoir.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ReservoirEntity,
            CityEntity,
            LevelReservoirEntity,
        ]),
    ],
})
export class ReservoirModule {}
