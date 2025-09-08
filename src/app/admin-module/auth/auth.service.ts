import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string {
    const token = this.getToken();
    if (!token) return '';
    try {
      const decoded: any = jwtDecode(token);
      return decoded['role'] || ''; // or 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    } catch (err) {
      return '';
    }
  }

  isSuperAdmin(): boolean {
    return this.getRole() === 'SuperAdmin';
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
