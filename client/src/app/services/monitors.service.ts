import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface MonitorItem {
    id: number;
    inc: number;
    screen_type: string;
    manufacture: string;
    refresh_rate: number;
    is_curved: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class MonitorService {
    private apiUrl = 'http://localhost:3000/api/monitors';

    constructor(private http: HttpClient) {}

    getMonitors(): Observable<MonitorItem[]> {
        return this.http.get<MonitorItem[]>(this.apiUrl);
    }
}