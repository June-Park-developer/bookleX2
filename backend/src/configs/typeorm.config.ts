import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: configService.get<string>('DATABASE_URL'),
  entities: [__dirname + '/../**/*.entity.{js, ts}'],
  synchronize: configService.get<string>('NODE_ENV') === 'development',
});
