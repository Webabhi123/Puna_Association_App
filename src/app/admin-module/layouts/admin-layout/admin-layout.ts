import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from '../../../shared/top-bar/top-bar';
import { Navbar } from '../../../shared/navbar/navbar';
import { Header } from '../../../shared/header/header';
import { Sidebar } from '../../sidebar/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,Sidebar,CommonModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout implements OnInit {
  isSidebarOpen = true;
  currentUserRole: string = '';

  ngOnInit(): void {
    this.currentUserRole = localStorage.getItem('role') || '';
  }

  onSidebarToggled(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }
}
