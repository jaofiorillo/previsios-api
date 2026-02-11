import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DbConfigService } from './db/db.config.service';
import { PrevisionModule } from './prevision/prevision.module';
import { ReservoirModule } from 'reservoir/reservoir.module';
import { LevelReservoirModule } from 'level_reservoir/reservoir.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            useClass: DbConfigService,
        }),
        UserModule,
        AuthModule,
        PrevisionModule,
        ReservoirModule,
        LevelReservoirModule,
    ],
})
export class AppModule {}
