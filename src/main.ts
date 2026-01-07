import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    app.useLogger(['log', 'error', 'warn', 'debug', 'verbose']);

    dotenv.config();
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle('Previsios-ts-api')
        .setDescription('Documentação da API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
