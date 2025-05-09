import { Component } from '@angular/core';
import { Swiper } from 'swiper/bundle';
import 'swiper/css/bundle';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

@Component({
  selector: 'app-ciclosy-dimensiones',
  imports: [MenuPrincipalComponent],
  templateUrl: './ciclosy-dimensiones.component.html',
  styleUrl: './ciclosy-dimensiones.component.css'
})
export class CiclosyDimensionesComponent {
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
