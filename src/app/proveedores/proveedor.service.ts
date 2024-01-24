import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
    })
  }
  constructor(private httpClient: HttpClient) { }
    //get all methods
    getAll():Observable<any>{
      return this.httpClient.get('api/proveedor/all', this.httpOptions).pipe(catchError((error:
        HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }

    //Create
    create(proveedor:Proveedor):Observable<any>{
      return this.httpClient.post('api/proveedor/', JSON.stringify(proveedor),this.httpOptions).pipe(catchError((error:
        HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }

    //Find by id
    find(id:number):Observable<any>{
      return this.httpClient.get('api/proveedor/'+id, this.httpOptions).pipe(catchError((error:
        HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }

    //Update
    update(id:number, proveedor:Proveedor):Observable<any>{
      return this.httpClient.put('api/proveedor/update/'+id, JSON.stringify(proveedor), this.httpOptions).pipe(catchError((error:
        HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }

    //Delete
    delete(id:number):Observable<any>{
      return this.httpClient.delete('api/proveedor/delete/'+id, this.httpOptions).pipe(catchError((error:
        HttpErrorResponse) => {
          return throwError(error);
        })
      );
    }
}
