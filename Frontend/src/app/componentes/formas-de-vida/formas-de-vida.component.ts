import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-formas-de-vida',
  imports: [MenuPrincipalComponent, FooterComponent],
  templateUrl: './formas-de-vida.component.html',
  styleUrl: './formas-de-vida.component.css'
})
export class FormasDeVidaComponent {

}
