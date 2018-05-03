import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CalendarService {

  constructor(
    private http: HttpClient
  ) { }

  getSemaine(numSemaine: number) {
    console.log('ok', numSemaine);
    return this.http.get(`${environment.url}weeks/${numSemaine}`)
  }
}
