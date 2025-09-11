import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserConfig {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: true })
  spoilerProtection: boolean;

  @Column({ default: true })
  receiveLikeNoti: boolean;

  @Column({ default: true })
  receiveCommentNoti: boolean;

  @Column({ default: true })
  receiveFollowNoti: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.config)
  user: User;
}
