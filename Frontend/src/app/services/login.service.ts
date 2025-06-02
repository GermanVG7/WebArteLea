import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

//reaizar solicitud con params usuario  y contraseña al servidor 
// getLoginById(user: string, password: string): Observable<any> {
//   console.log(`getLoginById inicio en services ${this.loginUrl}/${user}/${password}`);
//   return this.http.get(`${this.loginUrl}/${user}/${password}`);
// }

}

