import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataI } from '../interfaces/data.interface';

@Injectable({
	providedIn: 'root',
})

export class DataService {
  private url = 'assets/data/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<DataI> {
    return this.http.get<DataI>(this.url);
  }
}
