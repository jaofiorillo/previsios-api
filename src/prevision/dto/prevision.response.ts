import { Exclude, Expose, Transform } from 'class-transformer';

export class PrevisionResponse {
    @Expose()
    id: string;
    @Expose()
    @Transform(({ obj }) => obj.reservoir?.id)
    reservoirId: string;
    @Expose()
    previsionValue: number;
    @Expose()
    minValue: number;
    @Expose()
    maxValue: number;
    @Expose()
    @Transform(({ value }) =>
        value ? new Date(value).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }) : null
    )
    createdAt: Date;
}
