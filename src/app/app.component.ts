import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PortadaComponent } from './componentes/portada/portada.component';

@Component({
  selector: 'app-root',
  imports: [ PortadaComponent, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebArteLea';
}
