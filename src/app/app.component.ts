import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PortadaComponent } from './componentes/portada/portada.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebArteLea';
  mostrar = false;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrar = !event.url.includes('/biografia') && !event.url.includes('/proyectos')
          && !event.url.includes('/blog') && !event.url.includes('/contacto');
      }
    });
  }
}
