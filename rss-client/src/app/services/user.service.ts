import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from '../interfaces/user';
// import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  login(log): Observable<User> {
    // return this.httpclient.post<any>(
    //   'http://localhost:9000/user/login',
    //   log,
    //   this.httpOptions
    // );
    return of(this.user)
  }

  getAllUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>('http://localhost:9000/user/all');
  }

  getUserById(id: User): Observable<User> {
    return this.httpclient.post<any>(
      'http://localhost:9000/user/getuserbyid',
      id
    );
  }

  getUserByEmail(em: User): Observable<User> {
    return this.httpclient.post<any>(
      'http://localhost:9000/user/getuserbyemail',
      em
    );
  }

  addUser(user: User): Observable<User> {
    return this.httpclient.post<any>(
      'http://localhost:9000/user/adduser',
      user
    );
  }

  updateInfo(user: User): Observable<User> {
    return this.httpclient.post<any>(
      'http://localhost:9000/user/updateinfo',
      user
    );
  }

  updatePassword(u: User): Observable<User> {
    return this.httpclient.post<any>(
      'http://localhost:9000/user/updatepassword',
      u
    );
  }

  updateProfilePic(u: User): Observable<User> {
    return this.httpclient.post<any>(
      'http://localhost:9000/user/updateprofilepic',
      u
    );
  }

  updateIsAdmin(user: User): Observable<User> {
    return this.httpclient.post<any>(
      'http://localhost:9000/user/updateisadmin',
      user
    );
  }

  isLoggedIn = false;
  user: User = {
    userId: 2021,
    email: '',
    password: '',
    profilePic: null,
    firstName: 'Alex',
    lastName: 'Anderson',
    admin: false,
    userCartIds: [0]
  };
  // user: User = {
  //   userId: 2022,
  //   email: 'admin',
  //   password: 'admin',
  //   profilePic: null,
  //   firstName: 'admin',
  //   lastName: 'admin',
  //   admin: true,
  //   userCartIds: []
  // };
  changeUser(user: User) {
    this.isLoggedIn = true;
    this.user = user;
  }
  getCurrentUser() {
    return this.user;
  }
  loggedIn() {
    return this.isLoggedIn;
  }
}
