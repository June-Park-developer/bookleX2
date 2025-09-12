import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Thread } from '../../threads/entities/thread.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Like } from 'src/likes/entities/like.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  threadId: string;

  @Column()
  userId: string;

  @Column({ default: false })
  isSpoiler: boolean;

  @Column()
  content: string;

  @Column({ nullable: true })
  quote: string;

  @Column({ nullable: true })
  pageNumber: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  // Relations

  // thread (N:1 관계)
  @ManyToOne(() => Thread, (thread) => thread.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'threadId' })
  thread: Thread;

  // user (N:1 관계)
  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  // likes (1:N 관계)
  @OneToMany(() => Like, (like) => like.post)
  likes: Like[];

  // comments (1:N 관계)
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
