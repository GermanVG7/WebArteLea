import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service'; //servicios disponibles get post etc.
import { Login } from '../../models/login';//clase Login
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,//independiente, lo que significa que no necesita ser declarado dentro de un módulo de Angular
  imports: [RouterLink, CommonModule, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin: Login[]=[];
  users: Login[] =[];//para guardar los usuarios que se obtienen del servicio
  //sincornizar el formulario con la clase Login
  user: Login = { nombre: '', email: '', userName:'', user_pass:'' }; //inicializar los campos de la clase Login
  login: boolean = false;

  constructor(private userLoginService: LoginService,private http: HttpClient,private router: Router){}

getLogin(user:string, password:string): void {
  
  console.log('Start login metodo getLogin');
  console.log(`userName del formulario : ${this.user.userName}`);
  console.log(`pasword del formulario : ${this.user.user_pass}`)
//solicitar el servicio al servidor login en port 3000

this.http.get<any>(`http://localhost:3000/login/${user}/${password}`).subscribe(res => {

  console.log('Respuesta del servidor:', res.redirect);
  
  if (res.redirect === '/usuarios') {
  console.log('Login correcto, redirigiendo a:', res.redirect);
  alert('Login correcto');
    this.router.navigate([res.redirect]);
  }else if (res.redirect === '/login') {
    console.log('Login incorrecto, redirigiendo a:', res.redirect);
    alert('Usuario o contraseña incorrectos');
    this.router.navigate(['/']);
  } 
});
 
}

}

