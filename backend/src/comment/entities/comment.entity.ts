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
import { Post } from '../../posts/entities/post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  postId: string;

  @Column()
  userId: string;

  @Column({ nullable: true })
  parentId: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @ManyToOne(() => Post, (post) => post.comments)
  @JoinColumn({ name: 'postId' })
  post: Post;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'userId' })
  user: User;

  // 자기 참조
  // 상위 댓글 (N:1 관계)
  @ManyToOne(() => Comment, (comment) => comment.replies)
  @JoinColumn({ name: 'parentId' })
  parent: Comment;

  // 하위 답글들 (1:N 관계)
  @OneToMany(() => Comment, (comment) => comment.parent)
  replies: Comment[];
}
