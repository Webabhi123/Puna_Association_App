import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faUserCircle, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FontAwesomeModule,RouterModule ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  currentUserRole:string='';
  isMobile = false;
    faBars = faBars;
    faUserCircle = faUserCircle;
    faUsers = faUsers;
    faSignOutAlt = faSignOutAlt;

  constructor(private router:Router){}

  ngOnInit():void{
    this.currentUserRole=localStorage.getItem('role')||'';
    if(this.currentUserRole==='superadmin'){
      this.router.navigate(['/admin/user']);
    }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
