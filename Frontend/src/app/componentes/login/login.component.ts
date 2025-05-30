import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service'; //servicios disponibles get post etc.
import { Login } from '../../models/login';//clase Login

@Component({
  selector: 'app-login',
  standalone: true,//independiente, lo que significa que no necesita ser declarado dentro de un módulo de Angular
  imports: [RouterLink, CommonModule, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  users: Login[] =[];
  user: Login = { nombre: '', email: '', userName:'', user_pass:'' };

  login: boolean = false;
  idUser: number | null = null;

  constructor(private userLoginService: LoginService){}
  // SE LANZA AUTOMATICAMENTE AL MOSTRAR EL COMPONENTE
ngOnInit(): void {
  console.log('onInit start login');
    this.getLogin();
    
}
getLogin(): void {
  this.userLoginService.getLogin().subscribe(data =>{
  this.users = data ;
  console.log('en cuerpo metodo getlogin');
  //impremi un atributo del objeto user
  console.log(this.users);
  
  console.log(this.users[0].nombre);
  console.log(this.users[0].email);
  console.log(this.users[0].id);
  console.log(this.users[0].userName);
  console.log(this.users[0].user_pass);
  console.log(this.users.length);
  });
}
}

