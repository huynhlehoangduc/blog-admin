import { User } from './user';
import { Token } from './token';

export interface LoginFormResponse {
  user: User;
  token: Token;
}
