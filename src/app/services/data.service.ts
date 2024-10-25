import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IResumeData, IWorkplace } from '../interfaces/workplace.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = 'assets/workplaces.json';

  getWorkplaces(): Observable<IWorkplace[]> {
    return this.http.get<IResumeData>(this.baseUrl).pipe(map(data => data.workplaces));
  }
}