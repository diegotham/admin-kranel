import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private baseUrl = 'https://my-json-server.typicode.com/diagotham/admin-kranel';

    constructor(
        private http: HttpClient
    ) {
    }

    get<U>(url: string): Observable<U> {
        return this.http.get<U>(`${this.baseUrl}/${url}`);
    }

    post<T>(url: string, body: any) {
        return this.http.post<T>(`${this.baseUrl}/${url}`, body);
    }

    put<T>(url: string, body: any) {
        return this.http.put<T>(`${this.baseUrl}/${url}`, body);
    }

    delete(url: string) {
        return this.http.delete(`${this.baseUrl}/${url}`);
    }

}
