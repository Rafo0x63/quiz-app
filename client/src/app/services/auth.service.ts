import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private currentUserSubject = new BehaviorSubject<User | null>(null)
    public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable()

    private api = "http://localhost:3000/api"

    constructor(private http: HttpClient) {
        const storedUser = localStorage.getItem('currentUser')
        if (storedUser) {
            this.currentUserSubject.next(JSON.parse(storedUser))
        }
     }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.api}/auth/login`, {email, password}).pipe(
            tap(response => {
                const user = response.user
                if (user) {
                    this.currentUserSubject.next(user)

                    localStorage.setItem('currentUser', JSON.stringify(user))
                }
            })
        )
    }
}
