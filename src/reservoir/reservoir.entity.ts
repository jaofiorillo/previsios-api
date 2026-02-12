import { CityEntity } from 'city/city.entity';
import { LevelReservoirEntity } from 'level_reservoir/level-reservoir.entity';
import { PrevisionEntity } from 'prevision/prevision.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity({ name: 'reservoir' })
export class ReservoirEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'status', type: 'varchar', length: 10 })
    status: string;

    @Column({ name: 'capacity', type: 'varchar', length: 50 })
    capacity: string;

    @Column({ name: 'latitude', type: 'varchar', length: 50 })
    latitude: string;

    @Column({ name: 'longitude', type: 'varchar', length: 50 })
    longitude: string;

    @ManyToOne(() => CityEntity, (city) => city.reservoirs, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'city_id' })
    city: CityEntity;

    @OneToMany(() => LevelReservoirEntity, (level) => level.reservoir)
    levels: LevelReservoirEntity[];

    @OneToMany(() => PrevisionEntity, (prevision) => prevision.reservoir)
    previsions: PrevisionEntity[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
