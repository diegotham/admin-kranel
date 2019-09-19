import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { DataStorageService } from 'src/app/core/data-storage.service';
import { ApiService } from 'src/app/core/api.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private dataStorage: DataStorageService,
        private apiService: ApiService
        ) {
        this.currentUserSubject = new BehaviorSubject<User>((this.dataStorage.get('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Promise<User> {
        return new Promise(async (resolve, reject) => {
            if (username === 'emily@adminkranel.com' && password === 'hola') {
                const admin = await this.apiService.get<User>('users/1').toPromise();
                this.dataStorage.set('currentUser', admin);
                this.currentUserSubject.next(admin);
                resolve(admin);
            }
            reject('Wrong credentials!');
        });
    }

    logout(): void {
        this.dataStorage.remove('currentUser');
        this.currentUserSubject.next(null);
    }
}
