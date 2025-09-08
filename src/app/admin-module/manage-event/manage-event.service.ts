import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";



@Injectable({
    providedIn: 'root'
})

export class ManageEventService {
    private apiUrl = `${environment.apiUrl}/api/event`;
    //private apiUrl = 'https://peeapune.in/api//event';

    constructor(private http: HttpClient) {}

    getAllEvents():Observable<any[]> {
         const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<any[]>(`${this.apiUrl}`);
    }

   
    createEvent(event: any):Observable<any> {
        return this.http.post<any>(`${this.apiUrl}`, event);
    }

    // Example method to update an existing event
    updateEvent(id:number,event: any):Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${event.id}`, event);
    }

    // Example method to delete an event by ID
    deleteEventById(id: number):Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}