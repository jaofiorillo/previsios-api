import { ReservoirEntity } from '../reservoir/reservoir.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    JoinColumn,
} from 'typeorm';

@Entity({ name: 'prevision' })
export class PrevisionEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => ReservoirEntity, (reservoir) => reservoir.previsions, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'reservoir_id' })
    reservoir: ReservoirEntity;

    @Column({
        name: 'prevision_value',
        type: 'float',
        nullable: true,
    })
    previsionValue: number | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
