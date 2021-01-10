import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage-service.service';
import { environment } from "../../environments/environment";

const AUTH_API = `${environment.apiUrl}/auth/`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password,
     
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
  
      username: user.username,
      email: user.email,
      password: user.password,
      name: user.name,
      dateOfBirth: user.dob    }, httpOptions);
  }


   isAuthenticated(): boolean {
    const token = this.tokenStorageService.getToken();
    if (token != null) {
      return true;
    } else {
      return false;
    }
   }}


