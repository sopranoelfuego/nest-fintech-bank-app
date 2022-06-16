import Account from './account.entity';

export const accountProviders = [
  {
    provide: 'ACCOUNTS_REPOSITORY',
    useValue: Account,
  },
];
