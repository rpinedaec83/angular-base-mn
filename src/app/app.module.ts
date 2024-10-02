import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosService } from './services/libros.service';
import { InicioComponent } from './inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarraComponent } from './navegacion/barra/barra.component';
import { MenuListaComponent } from './navegacion/menu-lista/menu-lista.component';
import { SeguridadService } from './seguridad/seguridad.service';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books/books.service';
import { BookNuevoComponent } from './books/book-nuevo.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AutoresComponent } from './autores/autores.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
=======
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

>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
import { SeguridadInterceptor } from './seguridad/seguridad-interceptor';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
=======
    InicioComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
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
<<<<<<< HEAD
    AppRoutingModule,
    FormsModule,
=======
    FormsModule,
    AppRoutingModule,
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
<<<<<<< HEAD
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SeguridadInterceptor, multi: true },
    LibrosService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent],
  entryComponents: [BookNuevoComponent],
=======
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SeguridadInterceptor, multi: true },
    LibrosService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent]
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
})
export class AppModule {}
