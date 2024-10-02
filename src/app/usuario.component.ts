<<<<<<< HEAD
import {Component} from '@angular/core';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent{

  usuarios = ['Luis', 'Fernando', 'Maria'];
  usuarioNombre = '';
  visible = false;

  constructor(){
    setTimeout( () => {
      this.visible = true;
    },3000);


  }


  onAgregarUsuario() {
    this.usuarios.push(this.usuarioNombre);
  }

=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {
  arrUsuario = ['Roberto', 'David', 'Juan'];
  usuarioNombre = '';
  visible = false;
  constructor() {
    setTimeout(() => {
      this.visible = true;
    }, 3000);
  }

  onAgregarUsuario() {
    console.log(this.usuarioNombre);
    this.arrUsuario.push(this.usuarioNombre);
  }
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
}
