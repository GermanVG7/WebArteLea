import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service'; //seervicios disponibles get post etc.
import { Login } from '../../models/login';//clase Login
@Component({
  selector: 'app-login',
  standalone: true,//independiente, lo que significa que no necesita ser declarado dentro de un módulo de Angular
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  users: Login[] =[];
  user: Login= {username:'', password:''};

  constructor(private userLoginService: LoginService){}
  // SE LANZA AUTOMATICAMENTE AL MOSTRAR EL COMPONENTE
ngOnInit(): void {
    this.getLogin();

}
getLogin(): void {
   
  this.userLoginService.getLogin().subscribe(() =>{
    // this.user = data;
    console.log('en cuerpo getlogin');
    
  });

}


}

