import { Books } from './books.model';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
//import {PaginationBooks} from './pagination-books.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // baseUrl = environment.baseUrl;

  public booksLista: Books[] = [
    {
      id: '1',
      titulo: 'Libro 1',
      descripcion: 'Libro 1 desc',
      precio: 12,
      fechaPublicacion: new Date(),
      autor: {
        id: '1',
        nombreCompleto: 'Roberto Pineda',
      },
    },
    {
      id: '1',
      titulo: 'Libro 2',
      descripcion: 'Libro 1 desc',
      precio: 12,
      fechaPublicacion: new Date(),
      autor: {
        id: '1',
        nombreCompleto: 'Roberto Pineda',
      },
    },
    {
      id: '1',
      titulo: 'Libro 3',
      descripcion: 'Libro 1 desc',
      precio: 12,
      fechaPublicacion: new Date(),
      autor: {
        id: '1',
        nombreCompleto: 'Roberto Pineda',
      },
    },
    {
      id: '1',
      titulo: 'Libro 4',
      descripcion: 'Libro 1 desc',
      precio: 12,
      fechaPublicacion: new Date(),
      autor: {
        id: '1',
        nombreCompleto: 'Roberto Pineda',
      },
    },
    {
      id: '1',
      titulo: 'Libro 5',
      descripcion: 'Libro 1 desc',
      precio: 12,
      fechaPublicacion: new Date(),
      autor: {
        id: '1',
        nombreCompleto: 'David Lopez',
      },
    },
  ];

  bookSubject = new Subject();

  //bookPagination: PaginationBooks;
  //bookPaginationSubject = new Subject<PaginationBooks>();

  constructor() {}

  obtenerLibros(
    libroPorPagina: number,
    paginaActual: number,
    sort: string,
    sortDirection: string,
    filterValue: any
  ): void {
    const request = {
      pageSize: libroPorPagina,
      page: paginaActual,
      sort,
      sortDirection,
      filterValue,
    };

    // this.http.post<PaginationBooks>( this.baseUrl + 'Libro/Pagination', request)
    // .subscribe( (response) =>{
    //   this.bookPagination = response;
    //   this.bookPaginationSubject.next(this.bookPagination);

    // });
  }

  obtenerActualListener(): any {
    // return this.bookPaginationSubject.asObservable();
  }

  guardarLibro(book: Books): void {
    // this.http.post(this.baseUrl + 'Libro', book)
    //   .subscribe(( response) =>{
    //     this.bookSubject.next();
    //   });
  }

  guardarLibroListener(): any {
    return this.bookSubject.asObservable();
  }
}
