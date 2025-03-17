// import { Component } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-proyectos',
//   imports: [RouterLink,RouterOutlet],
//   templateUrl: './proyectos.component.html',
//   styleUrl: './proyectos.component.css'
// })
// export class ProyectosComponent {

// }
import { Component, OnInit } from '@angular/core';
// import Swiper JS
import { Swiper } from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

@Component({
  selector: 'app-proyectos',
  imports: [],
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
