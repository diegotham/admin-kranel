import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { User } from 'src/app/core/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getUsers(): Observable<User[]> {
    return this.apiService.get<User[]>('users');
  }

  getUser(id: number): Observable<User> {
    return this.apiService.get<User>(`users/${id}`);
  }
}
