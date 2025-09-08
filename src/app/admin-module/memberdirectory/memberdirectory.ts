import { Component, OnInit } from '@angular/core';
import { ManageUserService } from '../manage-user/manage-user.service';
import { BootstrapLoaderService } from '../bootstrap-loader.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-memberdirectory',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './memberdirectory.html',
  styleUrl: './memberdirectory.css'
})
export class Memberdirectory implements OnInit {
  users:any[]=[];
  filteredUsers: any[] = [];
  selectedUser: any;

  // Search bar logic
  searchKeyword: string = '';
  filteredSuggestions: string[] = [];
  showSuggestions: boolean = false;

  constructor(
    private manageUserService: ManageUserService,
    private bootstrapLoader: BootstrapLoaderService,  
  ) {}

  ngOnInit() {
    this.bootstrapLoader.loadBootstrap();
    this.getAllUsers();
  }

  getAllUsers() {
    this.manageUserService.getallusers().subscribe((data) => {
      this.users = data;
      this.filteredUsers = [...this.users];
    });
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
}
