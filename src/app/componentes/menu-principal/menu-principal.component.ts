import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-menu-principal',
  imports: [RouterLink,RouterOutlet,RouterLinkActive,SidebarComponent],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css'
})
export class MenuPrincipalComponent {

}
