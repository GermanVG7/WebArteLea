import { Routes } from '@angular/router';
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AppComponent } from './app.component';
import { FormasDeVidaComponent } from './componentes/formas-de-vida/formas-de-vida.component';


export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'biografia', component: BiografiaComponent}, 
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'blog', component: BlogComponent}, 
    {path: 'contacto', component: ContactoComponent}, 
    {path: 'formas-de-vida', component: FormasDeVidaComponent}
];
