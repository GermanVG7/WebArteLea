import { Component } from '@angular/core';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-blog',
  imports: [MenuPrincipalComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
