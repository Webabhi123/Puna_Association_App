import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';

interface User{
  userEmail:string;
  otp:string;
}

@Component({
  selector: 'app-memberlogin',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './memberlogin.html',
  styleUrls: ['./memberlogin.css']
})
export class Memberlogin implements OnInit {
  loginForm: FormGroup;
  showOtpField = false;
  isSendingOtp = false;
  isSubmitting = false;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      phoneNumber: [{ value: '', disabled: true }],
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }
  
  ngOnInit(): void {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.clear();
    }
  }
  sendOtp() {
    const userEmail = this.loginForm.get('userEmail')?.value;
    if (!userEmail) {
      alert('Please enter an email.');
      return;
    }
  
    this.authService.sendOtp(userEmail).subscribe({
      next: (res) => {
        console.log('OTP sent:', res);
        alert('OTP sent to your email.');
      },
      error: (err) => {
        console.error('Error sending OTP:', err);
        alert('Failed to send OTP');
      }
    });
  }
  onSubmit() {
    const formValue = this.loginForm.value;

    const payload = {
      userEmail: formValue.userEmail,
      otp: formValue.otp
    };

    this.http.post(`${environment.apiUrl}/api/user/verify-otp`, payload).subscribe({
      next: (res: any) => {
        alert("Login successfully "); // "OTP verified successfully"
        localStorage.setItem('token', res.token); // Store token
        localStorage.setItem('role', res.userrole); // Store token
        localStorage.setItem('userId',res.userId)
        this.router.navigate(['/admin/dashboard']);
        // Navigate or reload after login
      },
      error: (err) => {
        alert(err.error.message || 'Verification failed');
      }
    });
  }
  

    
    

  // Google Sign-In functionality
  private initializeGoogleSignIn(): void {
    const openGoogleModalBtn = document.getElementById('openGoogleSignInModal');
    const googleModal = document.getElementById('googleSignInModal');
    const googleModalClose = document.querySelector('.google-modal-close');
    const googleSignInForm = document.getElementById('googleSignInForm') as HTMLFormElement | null;

    // Initialize Google Sign-In button click handler
    if (openGoogleModalBtn && googleModal) {
      openGoogleModalBtn.addEventListener('click', () => {
        googleModal.style.display = 'flex';
      });
    }

    // Initialize Google Sign-In modal close button
    if (googleModalClose && googleModal) {
      googleModalClose.addEventListener('click', () => {
        googleModal.style.display = 'none';
      });
    }

    // Handle Google Sign-In form submission
    if (googleSignInForm) {
      googleSignInForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(googleSignInForm);
        const email = formData.get('email') as string;

        if (!email) {
          alert('Please enter your Google email');
          return;
        }

        try {
          const response = await this.http.post<{token: string}>
            (`${environment.apiUrl}/api/user/google-login`, { userEmail: email }).toPromise();

          if (response && response.token) {
            localStorage.clear();
            localStorage.setItem('token', response.token);
            
            // Close the modal and reset the form
            if (googleModal) googleModal.style.display = 'none';
            googleSignInForm.reset();
            
            // Redirect to admin dashboard
            this.router.navigate(['/admin/user']);
          } else {
            throw new Error('Invalid response from server');
          }
        } catch (err: any) {
          console.error('Google Sign-In error:', err);
          const errorMessage = err.error?.message || 'Google Sign-In failed. Please try again.';
          alert(errorMessage);
        }
      });
    }
    
    

    document.querySelectorAll('a[href="#"]').forEach(link => {
      if (link.textContent?.trim().toLowerCase().includes('forgot password')) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const modal = document.getElementById('forgotPasswordModal') as HTMLElement | null;
          if (modal) modal.style.display = 'flex';
        });
      }
    });

    // Close modal when clicking the × button
    const closeBtn = document.querySelector('.forgot-modal-close') as HTMLButtonElement | null;
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeForgotModal();
      });
    }

    // Close modal when clicking the "Close" button inside the modal
    const closeBtn2 = document.querySelector('.forgot-modal-close-btn') as HTMLButtonElement | null;
    if (closeBtn2) {
      closeBtn2.addEventListener('click', () => {
        closeForgotModal();
      });
    }

    const forgotForm = document.getElementById('forgotForm') as HTMLFormElement | null;
    if (forgotForm) {
      forgotForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(forgotForm);
        const email = formData.get('email') as string;

        if (!email) {
          alert('Please enter your email');
          return;
        }

        try {
          // Call the forgot password API
          const response = await this.http.post<{message: string}>
            (`${environment.apiUrl}/api/user/forgot-password`, { email }).toPromise();

          if (response) {
            alert(response.message || 'Password reset link has been sent to your email.');
            closeForgotModal();
          }
        } catch (err: any) {
          console.error('Forgot password error:', err);
          const errorMessage = err.error?.message || 'Failed to process your request. Please try again.';
          alert(errorMessage);
        }
      });
    }

    function closeForgotModal() {
      const modal = document.getElementById('forgotPasswordModal') as HTMLElement | null;
      if (modal) modal.style.display = 'none';
    }
  }
}
