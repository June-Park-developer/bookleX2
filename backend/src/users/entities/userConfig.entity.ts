import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
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

  // Relation
  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.config, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
