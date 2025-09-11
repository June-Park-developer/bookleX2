import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserConfig } from './userConfig.entity';
import { Profile } from './userProfile.entity';
import { Thread } from 'src/threads/entities/thread.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Like } from 'src/likes/entities/like.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Follow } from 'src/follows/entities/follow.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true }) // 이메일은 중복될 수 없음
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  // Relations

  // UserConfig (1:1)
  @OneToOne(() => UserConfig, (config) => config.user)
  @JoinColumn()
  config: UserConfig;

  // Profile (1:1)
  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;

  // Threads (1:N)
  @OneToMany(() => Thread, (thread) => thread.user)
  threads: Thread[];

  // Posts (1:N)
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  // Likes (1:N)
  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  // Comments (1:N)
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  // 팔로워 (나를 팔로우하는 사람들)
  @OneToMany(() => Follow, (follow) => follow.followee)
  followedBy: Follow[];

  // 팔로잉 (내가 팔로우하는 사람들)
  @OneToMany(() => Follow, (follow) => follow.follower)
  following: Follow[];
}
