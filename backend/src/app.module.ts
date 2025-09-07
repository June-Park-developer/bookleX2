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

@Module({
  imports: [UsersModule, ThreadsModule, BooksModule, PostsModule, CommentModule, AdminSettingsModule, FollowsModule, LikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
