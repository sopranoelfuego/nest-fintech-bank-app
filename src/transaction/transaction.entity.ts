import {
  ForeignKey,
  Model,
  Table,
  Column,
  Default,
} from 'sequelize-typescript';
import User from '../user/user.entity';
import { DataTypes } from 'sequelize';
import Account from '../account/account.entity';

export enum transactionEnum {
  credit = 'credit',
  debit = 'debit',
}
@Table({ timestamps: true })
export default class Transaction extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;
  @ForeignKey(() => Account)
  @Column
  accountId: number;
  @Column
  amount: number;
  @Column
  date: Date;
  @Column
  narration: string;
  @Default('credit')
  @Column(DataTypes.ENUM({ values: Object.keys(transactionEnum) }))
  transactionType: transactionEnum;
  @Column
  balance: number;
  @Column
  category: string;
}
