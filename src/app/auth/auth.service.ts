import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { DataStorageService } from 'src/app/core/data-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private dataStorage: DataStorageService) {
        this.currentUserSubject = new BehaviorSubject<User>((this.dataStorage.get('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Promise<User> {
        const admin = new User();
        admin.email = 'emily@adminkranel.com';
        admin.id = 1;
        admin.name = 'Emily';
        admin.postCount = 1;
        admin.username = 'emily';
        admin.isAdmin = true;

        return new Promise((resolve, reject) => {
            if (username === 'emily@adminkranel.com' && password === 'hola') {
                this.dataStorage.set('currentUser', admin);
                this.currentUserSubject.next(admin);

                return resolve(admin);
            }
            reject('Wrong credentials!');
        });
    }

    logout(): void {
        this.dataStorage.remove('currentUser');
        this.currentUserSubject.next(null);
    }
}
