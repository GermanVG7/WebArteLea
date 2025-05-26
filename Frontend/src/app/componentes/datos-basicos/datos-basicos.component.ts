import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { NavFormularioComponent } from '../nav-formulario/nav-formulario.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-datos-basicos',
  imports: [UsuariosComponent,LoginComponentgit ],
  templateUrl: './datos-basicos.component.html',
  styleUrl: './datos-basicos.component.css'
})
export class DatosBasicosComponent {

}
