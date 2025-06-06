import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet   } from '@angular/router';
import { MenuPrincipalComponent } from '../menu-principal/menu-principal.component';

@Component({
  selector: 'app-contacto',
  imports: [MenuPrincipalComponent,RouterOutlet],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  visiblePrevio(): void {
    // Inicializar la variable local
   const titulo = document.getElementById('titulo');
   const p1 = document.querySelector('#parte1') as HTMLElement;
   const p2 = document.getElementById('parte2') as HTMLElement;
   const p3 = document.getElementById('parte3') as HTMLElement;
   const previo = document.getElementById('anterior') as HTMLElement;
   const boton1 = document.getElementById('btn1') as HTMLElement;
   const boton2 = document.getElementById('btn2') as HTMLElement;
   const boton3 = document.getElementById('btn3') as HTMLElement;
   const siguiente = document.getElementById('siguiente') as HTMLElement;
    // console.log('Función visible() ejecutada'+typeof(titulo));
    // console.log('Función visible() ejecutada'+titulo);
    // if (titulo) {
    //   titulo.style.color = 'red';
    //   // p1.style.display = 'none';
    //   // p2.style.display = 'block';
    //   // boton2.classList.add('disabled');
    // }
    if (boton3.classList.contains('disabled') && !boton2.classList.contains('disabled')) {
      // Navegar de boton3 a boton2
      p1.style.display = 'none';
      p2.style.display = 'block';
      p3.style.display = 'none';

      boton3.classList.remove('disabled');
      boton2.classList.add('disabled');
      boton1.classList.remove('disabled');
      siguiente.classList.remove('disabled');
  }
   else if (boton2.classList.contains('disabled')) {
      // Navegar de boton2 a boton1
      p1.style.display = 'block';
      p2.style.display = 'none';
      p3.style.display = 'none';

      boton2.classList.remove('disabled');
      boton1.classList.add('disabled');
      boton3.classList.remove('disabled');
      siguiente.classList.remove('disabled');
      previo.classList.add('disabled');
  }
  }

//   previo.addEventListener('click', () => {
    
// });
visibleBoton1(): void {
 // Inicializar la variable local
 const titulo = document.getElementById('titulo');
 const p1 = document.querySelector('#parte1') as HTMLElement;
 const p2 = document.getElementById('parte2') as HTMLElement;
 const p3 = document.getElementById('parte3') as HTMLElement;
 const previo = document.getElementById('anterior') as HTMLElement;
 const boton1 = document.getElementById('btn1') as HTMLElement;
 const boton2 = document.getElementById('btn2') as HTMLElement;
 const boton3 = document.getElementById('btn3') as HTMLElement;
 const siguiente = document.getElementById('siguiente') as HTMLElement;
 p1.style.display = 'block';
 p2.style.display = 'none';
 p3.style.display = 'none';

 previo.classList.add('disabled');
 boton1.classList.add('disabled');
 boton2.classList.remove('disabled');
 boton3.classList.remove('disabled');
 siguiente.classList.remove('disabled');
}

// boton1.addEventListener('click', () => {
  

// });
visibleBoton2(): void {
  const titulo = document.getElementById('titulo');
 const p1 = document.querySelector('#parte1') as HTMLElement;
 const p2 = document.getElementById('parte2') as HTMLElement;
 const p3 = document.getElementById('parte3') as HTMLElement;
 const previo = document.getElementById('anterior') as HTMLElement;
 const boton1 = document.getElementById('btn1') as HTMLElement;
 const boton2 = document.getElementById('btn2') as HTMLElement;
 const boton3 = document.getElementById('btn3') as HTMLElement;
 const siguiente = document.getElementById('siguiente') as HTMLElement;
 p1.style.display = 'none';
    p2.style.display = 'block';
    p3.style.display = 'none';
    previo.classList.remove('disabled');
    boton1.classList.remove('disabled');
    boton2.classList.add('disabled');   
    boton3.classList.remove('disabled');
    siguiente.classList.remove('disabled');

}
// boton2.addEventListener('click', () => {
    

// });
visibleBoton3(): void {
  const titulo = document.getElementById('titulo');
  const p1 = document.querySelector('#parte1') as HTMLElement;
  const p2 = document.getElementById('parte2') as HTMLElement;
  const p3 = document.getElementById('parte3') as HTMLElement;
  const previo = document.getElementById('anterior') as HTMLElement;
  const boton1 = document.getElementById('btn1') as HTMLElement;
  const boton2 = document.getElementById('btn2') as HTMLElement;
  const boton3 = document.getElementById('btn3') as HTMLElement;
  const siguiente = document.getElementById('siguiente') as HTMLElement;

  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'block';

  previo.classList.remove('disabled');
  boton1.classList.remove('disabled');
  boton2.classList.remove('disabled');   
  boton3.classList.add('disabled');
  siguiente.classList.add('disabled');
}

// boton3.addEventListener('click', () => {
  
   
// });

visibleSiguiente(): void {
  const titulo = document.getElementById('titulo');
  const p1 = document.querySelector('#parte1') as HTMLElement;
  const p2 = document.getElementById('parte2') as HTMLElement;
  const p3 = document.getElementById('parte3') as HTMLElement;
  const previo = document.getElementById('anterior') as HTMLElement;
  const boton1 = document.getElementById('btn1') as HTMLElement;
  const boton2 = document.getElementById('btn2') as HTMLElement;
  const boton3 = document.getElementById('btn3') as HTMLElement;
  const siguiente = document.getElementById('siguiente') as HTMLElement;
  if (boton1.classList.contains('disabled') && !boton2.classList.contains('disabled')) {
    // Navegar de boton1 a boton2
    p1.style.display = 'none';
    p2.style.display = 'block';
    p3.style.display = 'none';

    previo.classList.remove('disabled');
    boton1.classList.remove('disabled');
    boton2.classList.add('disabled');
    boton3.classList.remove('disabled');
    siguiente.classList.remove('disabled');
}
 else if (boton2.classList.contains('disabled')) {
    // Navegar de boton2 a boton3
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'block';

    previo.classList.remove('disabled');
    boton1.classList.remove('disabled');
    boton2.classList.remove('disabled');
    boton3.classList.add('disabled');
    siguiente.classList.add('disabled');
}
}
// siguiente.addEventListener('click', () => {
   
// });


}
