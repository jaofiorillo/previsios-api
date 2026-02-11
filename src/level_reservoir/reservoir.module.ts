import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LevelReservoirEntity } from './level-reservoir.entity';

@Module({
    imports: [TypeOrmModule.forFeature([LevelReservoirEntity])],
})
export class LevelReservoirModule {}
