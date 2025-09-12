import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class AdminSetting {
  @PrimaryColumn({ default: 'singleton' })
  id: string;

  @Column({ default: true })
  isRegisterOpen: boolean;

  @Column({ default: false })
  maintenanceMode: boolean;

  @Column({ nullable: true })
  announcement: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
