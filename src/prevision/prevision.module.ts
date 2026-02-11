import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrevisionController } from './prevision.controller';
import { PrevisionService } from './prevision.service';
import { PrevisionEntity } from './prevision.entity';
import { ReservoirEntity } from 'reservoir/reservoir.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PrevisionEntity, ReservoirEntity])],
    controllers: [PrevisionController],
    providers: [PrevisionService],
})
export class PrevisionModule {}
