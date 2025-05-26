import { Routes } from '@angular/router';
import { BiografiaComponent } from './componentes/biografia/biografia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AppComponent } from './app.component';
import { DatosBasicosComponent } from './componentes/datos-basicos/datos-basicos.component';
import { FormasDeVidaComponent } from './componentes/formas-de-vida/formas-de-vida.component';
import { CiclosyDimensionesComponent } from './componentes/ciclosy-dimensiones/ciclosy-dimensiones.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginaError404Component } from './componentes/pagina-error404/pagina-error404.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    {path: '',redirectTo: '',pathMatch: 'full'},
    {path: '', component: AppComponent},
    {path: 'biografia', component: BiografiaComponent}, 
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'blog', component: BlogComponent}, 
    {path: 'contacto', component: ContactoComponent}, 
    {path: 'datos-basicos',component:DatosBasicosComponent},

    {path: 'formas-de-vida', component: FormasDeVidaComponent},
    {path: 'ciclos-dimensiones', component: CiclosyDimensionesComponent},
    {path: 'app-pagina-error404', component: PaginaError404Component},
    {path: '**', component: PaginaError404Component}
];
