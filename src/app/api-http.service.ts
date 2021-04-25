import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserCredentials} from './domain/UserCredentials';
import {Observable} from 'rxjs';

const BASE_URL = 'http://localhost:8848'; // w tym przypadku mamy back-end lokalny (w plku .jar)
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiHTTPService {

  constructor(private httpClient: HttpClient) { }

  userRegister(user: UserCredentials): Observable<any> {
    return this.httpClient.post(`${BASE_URL}/register`, JSON.stringify(user), HTTP_OPTIONS);
  }
}
