import {
  Column,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/auth/user.entity';

@Table
export default class Account extends Model {
  @Column
  @ForeignKey(() => User)
  userId: number;
  @Column
  accountName: string;
  @Column
  accountNumber: string;
  @Column
  type: string;
  @Column
  bankBalance: number;
  @Default('USD')
  @Column
  accountCurrency: string;
}
