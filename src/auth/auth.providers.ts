import { User } from './user.entity';

export const authProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];
