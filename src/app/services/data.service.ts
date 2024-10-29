import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { IResumeData, IWorkplace } from '../interfaces/workplace.interface';
import { IBio, IBioItem } from '../interfaces/bio.interface';
// import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = 'assets';

  getWorkplaces(): Observable<IWorkplace[]> {
    const url = this.baseUrl + '/workplaces.json';
    return this.http.get<IResumeData>(url).pipe(map(data => data.workplaces));
  }

  getBio(): Observable<IBioItem[]> {
    const url = this.baseUrl + '/bio.json';
    return this.http.get<IBio>(url).pipe(map(data => data!.bio));
  }
}