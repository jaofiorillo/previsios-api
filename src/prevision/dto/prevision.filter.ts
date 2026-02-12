import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsUUID } from 'class-validator';

export class PrevisionFilters {
    @IsOptional()
    @IsUUID()
    @ApiProperty({ example: '5987166d-8f55-479d-87e5-f2be63472f79' })
    reservoirId?: string;

    @IsOptional()
    @IsDateString()
    @ApiProperty({ example: '2026-02-01' })
    startDate?: string;

    @IsOptional()
    @IsDateString()
    @ApiProperty({ example: '2026-02-01' })
    endDate?: string;
}
