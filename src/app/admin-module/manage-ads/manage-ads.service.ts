import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ManageAdsService {
  private apiUrl = `${environment.apiUrl}/api/ads`;

  constructor(private http: HttpClient) { }

  getallads(): Observable<any[]> {
    // return this.http.get<any[]>(this.apiUrl);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  uploadads(ad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ad);
  }
  getadsbyid(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  updateadsbyid(id: number, ad: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, ad);
  }
  deleteadsbyid(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}