import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavFormularioComponent } from '../nav-formulario/nav-formulario.component';
// import { RouterOutlet } from '@angular/router';
import { DatosBasicosComponent } from '../datos-basicos/datos-basicos.component';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [MenuPrincipalComponent,DatosBasicosComponent,RouterOutlet,RouterLink,RouterLinkActive,NavFormularioComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {


  
}
