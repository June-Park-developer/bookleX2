import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  Unique,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
@Unique(['followerId', 'followeeId'])
export class Follow {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  followerId: string;

  @Column()
  followeeId: string;

  @CreateDateColumn()
  createdAt: Date;

  // Relations

  // 팔로우하는 사람 (Follower)
  @ManyToOne(() => User, (user) => user.following)
  @JoinColumn({ name: 'followerId' })
  follower: User;

  // 팔로우 받는 사람 (Followee)
  @ManyToOne(() => User, (user) => user.followedBy)
  @JoinColumn({ name: 'followeeId' })
  followee: User;
}
