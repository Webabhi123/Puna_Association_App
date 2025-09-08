import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.css']
})
export class ResetPassword implements OnInit {
  userId: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') || '';
    if(!this.userId){
      this.router.navigate(['/']);
    }
  }
  
  resetPassword(newPassword: string): void {
    if (!newPassword || newPassword.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    const payload = {
      id: this.userId,
      newPassword: newPassword
    };

    this.http.post(`${environment.apiUrl}/api/user/reset-password`, payload)
      .subscribe({
        next: (res: any) => {
          alert('Password reset successful!');
          this.router.navigate(['/memberlogin']);
        },
        error: (err) => {
          console.error(err);
          alert(err.error?.message || 'Failed to reset password');
        }
      });
  }
}
