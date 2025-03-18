
import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

@Component({
  selector: 'app-proyectos',
  imports: [MenuPrincipalComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent implements OnInit {

  ngOnInit(): void {
    let swiper: Swiper;
    swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 3500,
      
      // slidesPerView: 1,
      grabCursor: true,
      centeredSlides: true,

      // If we need pagination
      pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },

      // Navigation arrows
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
      },

      // And if we need scrollbar
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
