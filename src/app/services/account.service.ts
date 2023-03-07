import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({providedIn: 'root'})
export class AccountService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  test_string(id: string) {
    return this.http.get<User>(`/test/${id}`); // Expect a message
    // When Api
    // return this.http.get<User>(`api/user/${id}`);
    // :base/:collectionName
  }

  login(username: string, password: string) {
    /// Post to local url for testing
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, {username, password})
      .pipe(map(user => {
        // Store user details and jwt token in local storage
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    //
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  update(id: string, params: any) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, params)
      .pipe(map(x => {
        if (id == this.userValue?.id) {
          //
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          //
          this.userSubject.next(user);
        }
      }));
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(map(x => {
        if (id == this.userValue?.id) {
          this.logout();
        }
        return x;
      }));
  }

  private handleError<T>(operation = 'operation', result?: T) {

  }
}

// private heroesUrl = 'api/heroes';  // URL to web api
// return this.http.get<Hero[]>(this.heroesUrl)
