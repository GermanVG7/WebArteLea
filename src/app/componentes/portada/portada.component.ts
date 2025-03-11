import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portada',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent {
  showPortada = false;
  showBiografia = false;
  showContacto = false;
  showProyectos = false;
  showBlog = false;
  constructor(private router: Router) {
    // Suscribirse a los eventos del router
    this.router.events.subscribe(event => {
      // Verificar si el evento es de tipo NavigationEnd
      if (event instanceof NavigationEnd) {
      this.showPortada = !event.url.includes('/biografia') && !event.url.includes('/proyectos') && !event.url.includes('/blog') && !event.url.includes('/contacto');
      this.showBiografia = event.url.includes('/biografia');
      this.showProyectos = event.url.includes('/proyectos');
      this.showBlog = event.url.includes('/blog');
      this.showContacto = event.url.includes('/contacto');
      }
      
    });
  }

}
