import { Routes } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

export const routes: Routes = [

    {path: 'cabecera', component: CabeceraComponent},
    {path: 'portada', component: PortadaComponent},   
    {path: 'menu-principal', component: MenuPrincipalComponent}, 
    {path: 'biografia', component: BiografiaComponent}, 
    {path: 'proyectos', component: ProyectosComponent}, 
    {path: 'blog', component: BlogComponent}, 
    {path: 'contacto', component: ContactoComponent}, 
];