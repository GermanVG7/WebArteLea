import { Component } from '@angular/core';
import { Router, NavigationEnd,RouterLink,RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-cabecera',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
}
