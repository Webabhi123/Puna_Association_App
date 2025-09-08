import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ManageUserService {
   private apiUrl = `${environment.apiUrl}/api/user`;
  //private apiUrl = 'https://peeapune.in/api/user';

  constructor(private http: HttpClient) {}

  getallusers(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this.http.get<any[]>(`${this.apiUrl}/GetAllUsers`);
  }

  addUser(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateUser(formData: FormData, id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, formData); // ✅ send FormData directly
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}