import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private backendUrl = "http://localhost:8080/users/api"

  constructor(private httpClient: HttpClient) {

  }
  public createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.backendUrl}/create`, user);
  }

  public getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.backendUrl}/read-all`);
  }

  public getUserById(userId: number): Observable<User>{
    return this.httpClient.get<User>(`${this.backendUrl}/read/${userId}`);
  }

  public updateUser(userId:number, user:User): Observable<Object>{
    return this.httpClient.put(`${this.backendUrl}/update/${userId}`, user);
  }

  public deleteUser(userId:number): Observable<Object>{
    return this.httpClient.delete(`${this.backendUrl}/delete/${userId}`);
  }
}
