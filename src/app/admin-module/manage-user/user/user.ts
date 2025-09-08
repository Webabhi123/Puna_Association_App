import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../manage-user.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { BootstrapLoaderService } from '../../bootstrap-loader.service';
import { AuthService } from '../../auth/auth.service';
declare var bootstrap: any;
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-user',
  imports: [CommonModule,RouterLink,FormsModule,RouterModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  selectedUser: any;
  currentUserRole: string = '';

  // Search bar logic
  searchKeyword: string = '';
  filteredSuggestions: string[] = [];
  showSuggestions: boolean = false;
  downloaded: boolean = false;

  // selectedUser: any = null;

openCardModal(user: any) {
  this.selectedUser = user;
  this.downloaded = false; // Reset download button for each card
  // Show Bootstrap modal via JS
  const modal = new (window as any).bootstrap.Modal(document.getElementById('userCardModal'));
  modal.show();
}
  getImageUrl(relativePath: string): string {
    //environment.apiUrl = environment.apiUrl.split("/")[0] + "//" + environment.apiUrl.split("/")[2];
    return `${environment.apiUrl}${relativePath}`;
  }

  // Search input handler
  onSearchInput() {
    const keyword = this.searchKeyword.trim().toLowerCase();
    // Suggestions logic
    if (keyword.length === 0) {
      this.filteredSuggestions = [];
      this.showSuggestions = false;
      this.filteredUsers = [...this.users];
      return;
    }
    // Suggestions
    const suggestionsSet = new Set<string>();
    this.users.forEach(user => {
      ['nameOfFirm', 'address', 'ownerName', 'phoneNumber'].forEach(field => {
        if (user[field] && user[field].toLowerCase().includes(keyword)) {
          suggestionsSet.add(user[field]);
        }
      });
    });
    this.filteredSuggestions = Array.from(suggestionsSet);
    this.showSuggestions = this.filteredSuggestions.length > 0;
    // Filtered users for table
    this.filteredUsers = this.users.filter(user =>
      ['nameOfFirm', 'address', 'ownerName', 'phoneNumber'].some(field =>
        user[field] && user[field].toLowerCase().includes(keyword)
      )
    );
  }

  selectSuggestion(suggestion: string) {
    this.searchKeyword = suggestion;
    this.showSuggestions = false;
    // Filter table to show only matching users
    this.filteredUsers = this.users.filter(user =>
      ['nameOfFirm', 'address', 'ownerName', 'phoneNumber'].some(field =>
        user[field] && user[field] === suggestion
      )
    );
  }


  // Download card as image
  downloadCardAsImage() {
    const card = document.querySelector('#userCardModal .card-capture') as HTMLElement;
    if (!card) {
      alert('Card not found.');
      return;
    }
    const downloadBtn = card.querySelector('.btn-outline-success') as HTMLElement;
  if (downloadBtn) downloadBtn.style.display = 'none'; // Hide button
    const img = card.querySelector('img') as HTMLImageElement;
    if (!img) {
      alert('Image not found.');
      return;
    }
    html2canvas(card, {backgroundColor: null, useCORS: true}).then(canvas => {
      const link = document.createElement('a');
      link.download = (this.selectedUser?.ownerName || 'user-card') + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      this.downloaded = true;
      if (downloadBtn) downloadBtn.style.display = ''; // Show button again
      setTimeout(() => {
        this.downloaded = false;
      }, 1000);
      
    }).catch(() => {
      alert('Could not generate image. Please try again.');
    });
  }

  constructor(
    private manageUserService: ManageUserService,
    private bootstrapLoader: BootstrapLoaderService,
    private Authservice: AuthService,
    private router: Router  
  ) {}

  zoomedImageUrl: string | null = null;

  openZoom(imageUrl: string): void {
    this.zoomedImageUrl = imageUrl;
  }
  
  closeZoom(): void {
    this.zoomedImageUrl = null;
  }

  ngOnInit() {
    try {
      // Get user role and validate
      const role = localStorage.getItem('role');
      if (!role || role.trim() === '') {
        console.warn('No user role found, redirecting to login');
        this.router.navigate(['/login']);
        return;
      }
      
      this.currentUserRole = role.trim();
      // Load Bootstrap and fetch user data
      this.bootstrapLoader.loadBootstrap();

      
      this.getAllUsers(); // only admins get all users at startup
    
    } catch (error) {
      console.error('Error initializing user component:', error);
      this.router.navigate(['/login']);
    }
  }

  getAllUsers() {
    try {
      if (this.currentUserRole === 'user') {
        // For regular users, fetch only their data
        const currentUserId = localStorage.getItem('userId');
        if (!currentUserId) {
          console.error('No user ID found in local storage');
          this.router.navigate(['/login']);
          return;
        }
        
        this.manageUserService.getUserById(Number(currentUserId)).subscribe({
          next: (user) => {
            if (!user) {
              console.error('No user data returned');
              this.router.navigate(['/login']);
              return;
            }
            this.users = [user];
            this.filteredUsers = [...this.users];
          },
          error: (error) => {
            console.error('Error fetching user data:', error);
            this.users = [];
            this.filteredUsers = [];
            // Optionally show error message to user
          }
        });
      } else {
        // For admins, fetch all users
        this.manageUserService.getallusers().subscribe({
          next: (data) => {
            if (Array.isArray(data)) {
              this.users = data;
              this.filteredUsers = [...this.users];
            } else {
              console.error('Invalid data format received');
              this.users = [];
              this.filteredUsers = [];
            }
          },
          error: (error) => {
            console.error('Error fetching all users:', error);
            this.users = [];
            this.filteredUsers = [];
          }
        });
      }
    } catch (error) {
      console.error('Error in getAllUsers:', error);
      this.users = [];
      this.filteredUsers = [];
    }
  }
  openDeleteModal(user: any) {

    this.selectedUser = user;
    const modal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    modal.show();
  }
   confirmDelete() {
    if (!this.selectedUser) return;

    this.manageUserService.deleteUserById(this.selectedUser.id).subscribe({
      next: () => {
        this.getAllUsers();
        const modal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmModal'));
        modal.hide();
      },
      error: () => {
        alert('Failed to delete user.');
      }
    });
  }

}
