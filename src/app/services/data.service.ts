import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IWorkplace } from '../interfaces/workplace.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = 'assets/workplaces.json';

  getData(): Observable<IWorkplace[]> {
    //@ts-ignore
    return this.http.get<IWorkplace[]>(this.baseUrl).pipe(map(data => data.workplaces));
  }
}