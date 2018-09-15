import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Entity } from 'app/common/model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestService<T> {

	private uri: string;

  	constructor(private http: HttpClient) { }


	getAll(): Observable<T[]> {
  		return this.http.get<T[]>(this.uri).pipe(
	        tap(result => result),
	        catchError(this.handleError('getAll', []))
	      );
	}

	get(id: string): Observable<T> {
  		return this.http.get<T>(this.buildUri(id)).pipe(
	        tap(result => result),
	        catchError(this.handleError('get', null))
	      );
	}

	post(entity: Entity): Observable<T> {
		return this.http.post(this.uri, entity).pipe(
	        tap(result => result),
	        catchError(this.handleError('post', null))
	      );
	}

	put(id: string, entity: Entity): Observable<T> {
		return this.http.put(this.buildUri(id), entity).pipe(
	        tap(result => result),
	        catchError(this.handleError('put', null))
	      );
	}

	delete(id: string): Observable<T> {
		return this.http.delete(this.buildUri(id)).pipe(
	        tap(result => result),
	        catchError(this.handleError('put', null))
	      );
	}

	setUri(uri: string) {
		this.uri = uri;
	}

	private buildUri(id): string {
		return `${this.uri}/${id}`;
	}

	/**
   	  * Handle Http operation that failed.
   	  * Let the app continue.
   	  * @param operation - name of the operation that failed
   	  * @param result - optional value to return as the observable result
    */
  	private handleError<T> (operation = 'operation', result?: T) {
    	return (error: any): Observable<T> => {

	      	// TODO: send the error to remote logging infrastructure
	      	console.error(error); // log to console instead

	      	// TODO: better job of transforming error for user consumption
	      	this.log(`${operation} failed: ${error.message}`);

	      	// Let the app keep running by returning an empty result.
	      	return of(result as T);
	    };
  	}

	
  	private log(message: string) {
    	
  	}

}
