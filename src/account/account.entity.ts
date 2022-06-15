import { Column, Model, Table } from 'sequelize-typescript';
@Table
export class Account extends Model {
  //  userId
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
