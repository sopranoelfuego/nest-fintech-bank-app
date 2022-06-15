import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import User from 'src/user/user.entity';
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
  @Column
  accountCurrency: string;
}
