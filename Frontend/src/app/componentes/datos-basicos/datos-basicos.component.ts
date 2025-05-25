import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { NavFormularioComponent } from '../nav-formulario/nav-formulario.component';
import { UsuariosComponent } from '../../components/usuarios/usuarios.component';

@Component({
  selector: 'app-datos-basicos',
  imports: [UsuariosComponent],
  templateUrl: './datos-basicos.component.html',
  styleUrl: './datos-basicos.component.css'
})
export class DatosBasicosComponent {

}
