import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LoginFormResponse } from '../interfaces/login-form-response';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';

export interface LoginForm {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  readonly API_ENDPOINT = 'auth';
  readonly LS_TOKEN = 'token';
  readonly LS_USER = 'user';

  constructor(private readonly httpClient: HttpClient) {
  }

  login(payload: LoginForm, options = {}): Observable<LoginFormResponse> {
    return this.httpClient.post<LoginFormResponse>(`${ environment.apiUrl }/${ this.API_ENDPOINT }/login`, payload, options);
  }

  me(token: string): Observable<User> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ token }`,
      }),
    };
    return this.httpClient.get(`${ environment.apiUrl }/${ this.API_ENDPOINT }/me`, options);
  }

  storeTokenInfo(token: Token): void {
    localStorage.setItem(this.LS_TOKEN, JSON.stringify(token));
  }

  storeUserInfo(user: User): void {
    localStorage.setItem(this.LS_USER, JSON.stringify(user));
  }

  getToken(): Token {
    const token: string | null = localStorage.getItem(this.LS_TOKEN);
    return token ? JSON.parse(token) : null;
  }

  getUser(): User {
    const token = localStorage.getItem(this.LS_USER);
    return token ? JSON.parse(token) : null;
  }
}
