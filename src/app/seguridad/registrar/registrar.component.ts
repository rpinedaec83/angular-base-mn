import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
import { SeguridadService } from '../seguridad.service';
=======
import { SeguridadService } from '../seguridad.service';
import { NgForm } from '@angular/forms';
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
<<<<<<< HEAD
  styleUrls: ['./registrar.component.css'],
=======
  styleUrls: ['./registrar.component.css']
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
})
export class RegistrarComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) {}

<<<<<<< HEAD
  ngOnInit(): void {}
=======
  ngOnInit(): void {
  }
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562

  registrarUsuario(form: NgForm) {
    console.log(form);
    this.seguridadService.registrarUsuario({
      email: form.value.email,
      password: form.value.password,
      apellido: form.value.apellidos,
      nombre: form.value.nombre,
      username: form.value.username,
      usuarioId: '',
      token: ''
    });

<<<<<<< HEAD

=======
>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
  }
}
