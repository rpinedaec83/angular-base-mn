import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BooksComponent } from './books/books.component';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import {SeguridadRouter} from './seguridad/seguridad.router';
import {AutoresComponent} from './autores/autores.component';

=======

import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';

import { LoginComponent } from './seguridad/login/login.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import {SeguridadRouter} from './seguridad/seguridad.router';

import { BooksComponent } from './books/books.component';
import { AutoresComponent } from './autores/autores.component';
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562

const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [SeguridadRouter] },
  { path: 'libros', component: LibrosComponent },
<<<<<<< HEAD
  { path: 'registrar', component: RegistrarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent, canActivate: [SeguridadRouter] },
  { path: 'autores', component: AutoresComponent, canActivate: [SeguridadRouter] },
=======
  { path: 'registrar', component: RegistrarComponent},
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'autores', component: AutoresComponent}
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SeguridadRouter]
})
export class AppRoutingModule {}
