import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ThreadsModule } from './threads/threads.module';
import { BooksModule } from './books/books.module';
import { PostsModule } from './posts/posts.module';
import { CommentModule } from './comment/comment.module';
import { AdminSettingsModule } from './admin-settings/admin-settings.module';
import { FollowsModule } from './follows/follows.module';
import { LikesModule } from './likes/likes.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: `${__dirname}/../.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    UsersModule,
    ThreadsModule,
    BooksModule,
    PostsModule,
    CommentModule,
    AdminSettingsModule,
    FollowsModule,
    LikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
