import { IsNotEmpty } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  accountName: string;
  @IsNotEmpty()
  accountNumber: string;
  @IsNotEmpty()
  type: string;

  bankBalance: number;

  accountCurrency: string;
}
