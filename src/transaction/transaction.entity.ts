import {
  ForeignKey,
  Model,
  Table,
  Column,
  Default,
  DataType,
} from 'sequelize-typescript';

import Account from '../account/account.entity';
import { User } from '../auth/user.entity';

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
  @Column(DataType.ENUM({ values: Object.keys(transactionEnum) }))
  @Default('credit')
  transactionType: transactionEnum;
  @Column
  balance: number;
  @Column
  category: string;
}
