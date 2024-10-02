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
  baseUrl = environment.baseUrl;

  seguridadCambio = new Subject<boolean>();
  private usuario: Usuario;

  cargarUsuario(): void {
<<<<<<< HEAD
    const tokenBrowser = localStorage.getItem('token');
    if (!tokenBrowser) {
      return;
    }

    this.token = tokenBrowser;
    this.seguridadCambio.next(true);

    this.http.get<Usuario>(this.baseUrl + 'usuario').subscribe((response) => {
=======


    this.seguridadCambio.next(true);
    // const tokenBrowser = localStorage.getItem('token');
    // if (!tokenBrowser) {
    //   return;
    // }

    // this.token = tokenBrowser;
    // this.seguridadCambio.next(true);

   /* this.http.get<Usuario>(this.baseUrl + 'usuario').subscribe((response) => {
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
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
<<<<<<< HEAD
    });
=======
    });*/
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
  }

  obtenerToken(): string {
    return this.token;
  }

  constructor(private router: Router, private http: HttpClient) {}

<<<<<<< HEAD
  registrarUsuario(usr: Usuario): void {
=======
 registrarUsuario(usr: Usuario): void {
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
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
<<<<<<< HEAD

    // this.usuario = {
    //   email: usr.email,
    //   usuarioId: Math.round(Math.random() * 10000).toString(),
    //   nombre: usr.nombre,
    //   apellidos: usr.apellidos,
    //   username: usr.username,
    //   password: '',
    //   token: ''
=======
    }
// registrarUsuario(usr: Usuario): void {
//      this.usuario = {
//        email: usr.email,
//        usuarioId: Math.round(Math.random() * 10000).toString(),
//        nombre: usr.nombre,
//        apellido: usr.apellido,
//        username: usr.username,
//        password: '',
//        token: ''
//      };

//      this.seguridadCambio.next(true);
//      this.router.navigate(['/']);
//   }

  login(loginData: LoginData): void {

    // this.usuario = {
    //   email: loginData.email,
    //   password: loginData.password,
    //   usuarioId:'',
    //   nombre:'',
    //   apellido:'',
    //   token:'',
    //   username:''
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
    // };

    // this.seguridadCambio.next(true);
    // this.router.navigate(['/']);
<<<<<<< HEAD
  }

  login(loginData: LoginData): void {
=======

>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
    this.http
      .post<Usuario>(this.baseUrl + 'usuario/login', loginData)
      .subscribe((response) => {
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
        this.router.navigate(['/']);
      });
  }

  salirSesion() {
    this.usuario = null;
    this.seguridadCambio.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  obtenerUsuario() {
    return { ...this.usuario };
  }

  onSesion() {
    return this.usuario != null;
  }
}
