import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Book } from '../../books/entities/book.entity';
import { Genre, ThreadStatus } from 'src/common/enums/thread.enum';
import { Post } from 'src/posts/entities/post.entity';

@Entity()
export class Thread {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  bookId: string;

  @Column({
    type: 'enum',
    enum: Genre,
  })
  genre: Genre;

  @Column({
    type: 'enum',
    enum: ThreadStatus,
  })
  status: ThreadStatus;

  @Column({ default: false })
  isPrivate: boolean;

  @Column()
  startedAt: Date;

  @Column({ nullable: true })
  completedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations

  // Book (N:1 관계)
  @ManyToOne(() => Book, (book) => book.threads)
  @JoinColumn({ name: 'bookId' })
  book: Book;

  // User (N:1)
  @ManyToOne(() => User, (user) => user.threads)
  @JoinColumn({ name: 'userId' })
  user: User;

  // Posts (1:N 관계)
  @OneToMany(() => Post, (post) => post.thread)
  posts: Post[];
}
