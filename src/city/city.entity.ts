import { ReservoirEntity } from '../reservoir/reservoir.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity({ name: 'city' })
export class CityEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 50 })
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @OneToMany(() => ReservoirEntity, (reservoir) => reservoir.city)
    reservoirs: ReservoirEntity[];
}
