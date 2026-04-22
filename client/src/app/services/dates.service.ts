import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DateItem {
  id: number;
  date: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DatesService {
  private apiUrl = 'http://localhost:3000/api/dates';

  constructor(private http: HttpClient) {}

  getDates(): Observable<DateItem[]> {
    return this.http.get<DateItem[]>(this.apiUrl);
  }
}
