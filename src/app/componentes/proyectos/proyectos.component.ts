
import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';
import { FormasDeVidaComponent } from '../formas-de-vida/formas-de-vida.component';
import { CiclosyDimensionesComponent } from '../ciclosy-dimensiones/ciclosy-dimensiones.component';

@Component({
  selector: 'app-proyectos',
  imports: [MenuPrincipalComponent, FormasDeVidaComponent, CiclosyDimensionesComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  ngOnInit(): void {
    let swiper: Swiper;
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      speed: 3000,
      
      grabCursor: true,
      centeredSlides: true,

      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },

      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
      },

      scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      
      },
      effect: 'cube',
      cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 100,
      shadowScale: 1,
      },
      autoplay: {
      delay: 3000,
      },
    });

  }
  
}
