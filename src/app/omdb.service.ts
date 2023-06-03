import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private API_KEY = 'bf257086';
  private API_URL = 'http://www.omdbapi.com/'

  constructor(private http: HttpClient) {}

  
  searchMovies(title: string, page: number = 1): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_KEY}&s=${title}&page=${page}&r=json&type=movie`;
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response;
      }),
      catchError(error => {
        console.error('Error in OmdbService: ', error);
        return throwError(error);
      })
    );
  }

  defaultMovies(): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_KEY}&s=Avatar&page=1&r=json&type=movie`;
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response;
      }),
      catchError(error => {
        console.error('Error in OmdbService: ', error);
        return throwError(error);
      })
    );
  }

  searchSeries(title: string, page: number = 1): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_KEY}&s=${title}&page=${page}&r=json&type=series`;
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response;
      }),
      catchError(error => {
        console.error('Error in OmdbService: ', error);
        return throwError(error);
      })
    );
  }

  defaultSeries(): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_KEY}&s=Avatar&page=1&r=json&type=series`;
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response;
      }),
      catchError(error => {
        console.error('Error in OmdbService: ', error);
        return throwError(error);
      })
    );
  }

  getDetails(id: string): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_KEY}&i=${id}&r=json`;
    return this.http.get(url)
    .pipe(
      map((response: any) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response;
      }),
      catchError(error => {
        console.error('Error in OmdbService: ', error);
        return throwError(error);
      })
    );
  }

}
