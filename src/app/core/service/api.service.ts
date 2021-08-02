import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * used to formate errors
   * @param error 
   * @returns 
   */
  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  
  get(path: string, offset:number, limit: number): Observable<any> {
    return this.http.get(`${environment.api_url}${path}?offset=${offset}&limit=${limit}`)
      .pipe(catchError(this.formatErrors));
  }

  getPokemon(path:string, name:string):Observable<any> {
    return this.http.get(`${environment.api_url}${path}/${name}`)
      .pipe(catchError(this.formatErrors));
  }
}

