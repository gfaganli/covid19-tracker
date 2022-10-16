import { Injectable } from '@angular/core';
import * as APIs from './server-api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ICountry } from './country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  tableItemSource = new Subject<ICountry>();
  tableItemClicked$ = this.tableItemSource.asObservable();

  constructor(private http: HttpClient) {}

  getCountryList(
    per_page: number = 0,
    page: number = 0
  ): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(APIs.COVID_STATISTICS, {
      params: new HttpParams({
        // conditionally send/hide params if there is any
        fromObject: {
          ...(per_page && { per_page }),
          ...(page && { page }),
        },
      }),
    });
  }
}
