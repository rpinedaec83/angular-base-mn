import { Subject } from 'rxjs';

import { Usuario } from './usuario.model';
import { LoginData } from './login-data.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {
  private token: string;
  //baseUrl = environment.baseUrl;

  seguridadCambio = new Subject<boolean>();
  private usuario: Usuario;

  cargarUsuario(): void {


    this.seguridadCambio.next(true);
    // const tokenBrowser = localStorage.getItem('token');
    // if (!tokenBrowser) {
    //   return;
    // }

    // this.token = tokenBrowser;
    // this.seguridadCambio.next(true);

   /* this.http.get<Usuario>(this.baseUrl + 'usuario').subscribe((response) => {
      console.log('login respuesta', response);

      this.token = response.token;
      this.usuario = {
        email: response.email,
        nombre: response.nombre,
        apellido: response.apellido,
        token: response.token,
        password: '',
        username: response.username,
        usuarioId: response.usuarioId,
      };
      this.seguridadCambio.next(true);
      localStorage.setItem('token', response.token);
    });*/
  }

  obtenerToken(): string {
    return this.token;
  }

  constructor(private router: Router) {}

 /* registrarUsuario(usr: Usuario): void {
    this.http
      .post<Usuario>(this.baseUrl + 'usuario/registrar', usr)
      .subscribe((response) => {
        this.token = response.token;
        this.usuario = {
          email: response.email,
          nombre: response.nombre,
          apellido: response.apellido,
          token: response.token,
          password: '',
          username: response.username,
          usuarioId: response.usuarioId,
        };
        this.seguridadCambio.next(true);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      });
*/
registrarUsuario(usr: Usuario): void {
     this.usuario = {
       email: usr.email,
       usuarioId: Math.round(Math.random() * 10000).toString(),
       nombre: usr.nombre,
       apellido: usr.apellido,
       username: usr.username,
       password: '',
       token: ''
     };

     this.seguridadCambio.next(true);
     this.router.navigate(['/']);
  }

  login(loginData: LoginData): void {

    this.usuario = {
      email: loginData.email,
      password: loginData.password,
      usuarioId:'',
      nombre:'',
      apellido:'',
      token:'',
      username:''
    };

    this.seguridadCambio.next(true);
    this.router.navigate(['/']);

    // this.http
    //   .post<Usuario>(this.baseUrl + 'usuario/login', loginData)
    //   .subscribe((response) => {
    //     console.log('login respuesta', response);

    //     this.token = response.token;
    //     this.usuario = {
    //       email: response.email,
    //       nombre: response.nombre,
    //       apellido: response.apellido,
    //       token: response.token,
    //       password: '',
    //       username: response.username,
    //       usuarioId: response.usuarioId,
    //     };
    //     this.seguridadCambio.next(true);
    //     localStorage.setItem('token', response.token);
    //     this.router.navigate(['/']);
    //   });
  }

  salirSesion() {
    this.usuario = null;
    // this.seguridadCambio.next(false);
    // localStorage.removeItem('token');
    // this.router.navigate(['/login']);
  }

  obtenerUsuario() {
    return { ...this.usuario };
  }

  onSesion() {
    return this.usuario != null;
  }
}
