import { Component } from '@angular/core';

@Component({
 selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent{
  arrUsuario = ['Roberto', 'David', 'Juan'];
  usuarioNombre= '';
  visible = false;
  constructor(){
    setTimeout( () => {
      this.visible = true;
    },3000);


  }

  onAgregarUsuario() {
    console.log(this.usuarioNombre);
    this.arrUsuario.push(this.usuarioNombre);
  }

}

