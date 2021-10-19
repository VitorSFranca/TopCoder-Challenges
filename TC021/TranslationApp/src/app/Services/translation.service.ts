import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Translation } from './translation';


@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  translateUrl = ' http://localhost:3001/translate';

  constructor(private http: HttpClient) { 
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  translate(text: string): Observable<Translation> {

    return this.http.post<Translation>(this.translateUrl, { text }).pipe(
      catchError(this.handleError<Translation>('Translate'))
    );
  }
}
