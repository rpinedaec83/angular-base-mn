import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private seguridadService: SeguridadService

  ) {}

  ngOnInit(): void {}

  loginUsuario(form: NgForm): void {
    this.seguridadService.login({
      email: form.value.email,
      password: form.value.password,
    });
  }

}
