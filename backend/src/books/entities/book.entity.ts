import { Thread } from 'src/threads/entities/thread.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text', { array: true })
  author: string[];

  @Column()
  publisher: string;

  @Column({ unique: true })
  isbn13: string;

  @Column({ nullable: true })
  thumbnail: string;

  @Column({ type: 'timestamp', nullable: true })
  publishedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relation: Threads (1:다 관계)
  @OneToMany(() => Thread, (thread) => thread.book)
  threads: Thread[];
}
