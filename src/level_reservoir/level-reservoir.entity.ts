import { ReservoirEntity } from '../reservoir/reservoir.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';

@Entity({ name: 'level_reservoir' })
export class LevelReservoirEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => ReservoirEntity, (reservoir) => reservoir.levels, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'reservoir_id' })
    reservoir: ReservoirEntity;

    @CreateDateColumn({ name: 'timestamp' })
    timestamp: Date;

    @Column({ name: 'level', type: 'float' })
    level: number;
}
