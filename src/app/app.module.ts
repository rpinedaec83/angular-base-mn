import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent} from './inicio.component';
import { UsuarioComponent } from './usuario.component';

import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosService } from './services/libros.service';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraComponent } from './navegacion/barra/barra.component';
import { MenuListaComponent } from './navegacion/menu-lista/menu-lista.component';
import { BooksComponent } from './books/books.component';
import { BookNuevoComponent } from './books/book-nuevo.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AutoresComponent } from './autores/autores.component';

//import { BookNuevoComponent } from './books/book-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    RegistrarComponent,
    LoginComponent,
    BarraComponent,
    MenuListaComponent,
    BooksComponent,
    BookNuevoComponent,
    AutoresComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
