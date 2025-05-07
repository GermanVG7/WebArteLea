import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet   } from '@angular/router';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

@Component({
  selector: 'app-contacto',
  imports: [RouterLink,RouterOutlet,RouterLinkActive,MenuPrincipalComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  
}
