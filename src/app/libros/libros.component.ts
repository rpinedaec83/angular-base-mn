import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros = [];
<<<<<<< HEAD
  constructor(private librosService: LibrosService) {}
=======


  constructor(private librosService: LibrosService) {}


>>>>>>> 8c58fa0337ee72e456e18621369e949e8b675562
  private libroSubscription: Subscription;



  eliminarLibro(libro) {}

  guardarLibro(f) {
    if (f.valid) {
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit() {
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(){
    this.libroSubscription.unsubscribe();
  }






}
