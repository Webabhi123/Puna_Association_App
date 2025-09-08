import { Component } from '@angular/core';
import { ManageUserService } from '../manage-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import bootstrap from '../../../../main.server';

interface User {
 // Add index signature
  nameOfFirm: string;
  address: string;
  ownerName: string;
  //username: string;
  //password: string;
  phoneNumber: string;
  landLine: string;
  resident: string;
  website: string;
  userEmail: string;
  fax: string;
  dateOfEstablishment: string;
  bloodGroup: string;
  gst: string;
  dateOfBirth: string;
  photo: File | null;
  userRole: string;
  authority: string;
  personalEmail: string;
  membershipType: string;
  //businessAddress: string;
  businessEmail:string;
  city: string;
  state: string;
  intercomNumber: string;
  companyRegistrationNumber: string;
  panNumber: string;
  pinCode:string;
  mobileNumber:string;
  whatsappNumber:string;
  status:string;
  exportImportNumber:string;
  udyogAdharNumber:string;
  googleDirectionLink:string;
  //officeTelephone1:string;
  //officeTelephone2:string;
  gstFilePath:File  |null;
  detailingInProductServices:string;
  modeOfBusiness:string;
  personalPanNumber:string;
  personalPhoneNumber: string;
  //vatRegNo:string;
  aadharNumber: string;
  otherRegNo: string;
  
  // Additional User Fields
  addOwnerName: string;
  addResident: string;
  addMobileNumber: string;
  addLandLineNumber: string;
  addPanNumber: string;
  addBloodGroup: string;
  addDateOfBirth: string;
  addEmail: string;
  addAadharNumber: string;
  addOtherRegNo: string;
  addUserRole: string;
  
  // Index signature for dynamic property access
  [key: string]: any;
}

@Component({
  selector: 'app-create-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
  
export class CreateUser {
  userId: number | null = null;
  isEditMode:boolean= false;
  newUser: any = {};
  

user: User = {
  nameOfFirm: '',
  address: '',
  ownerName: '',
  phoneNumber: '',
  landLine: '',
  resident: '',
  website: '',
  userEmail: '',
  fax: '',
  dateOfEstablishment: '',
  bloodGroup: '',
  gst: '',
  dateOfBirth: '',
  photo: null,
  userRole: '',
  authority: '',
  personalEmail: '',
  membershipType: '',
  //businessAddress: '',
  businessEmail:'',
  city: '',
  state: '',
  intercomNumber: '',
  companyRegistrationNumber: '',
  panNumber: '',
  pinCode:'',
  mobileNumber:'',
  whatsappNumber:'',
  status:'',
  exportImportNumber:'',
  udyogAdharNumber:'',
  googleDirectionLink:'',
  //officeTelephone1:'',
  //officeTelephone2:'',
  //vatRegNo:'',
  aadharNumber:'',
  otherRegNo:'',
  gstFilePath:null,
  detailingInProductServices:'',
  modeOfBusiness:'',
  personalPanNumber:'',
  personalPhoneNumber:'',
  addOwnerName:'',
  addResident:' ',
  addMobileNumber:'',
  addLandLineNumber:'',
  addPanNumber:'',
  addBloodGroup:'',
  addDateOfBirth:'',
  addEmail:'',
  addAadharNumber: '',
  addOtherRegNo:'',
  addUserRole:''
};
selectedPhoto: File | null = null;
selectedGstFile: File | null = null;
currentUserRole:string='';
users:any={};

constructor(private route: ActivatedRoute, private manageUserService: ManageUserService, private router: Router) {}

   ngOnInit(): void {
    debugger;
    this.currentUserRole = localStorage.getItem('role') || '';
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.userId) {
      this.isEditMode = true;
      this.manageUserService.getUserById(this.userId).subscribe({
        next: (res) => {
          this.user = res;
          // Format date fields for the date input
          if (this.user.dateOfBirth) {
            this.user.dateOfBirth = this.formatDateForInput(this.user.dateOfBirth);
          }
          if (this.user.dateOfEstablishment) {
            this.user.dateOfEstablishment = this.formatDateForInput(this.user.dateOfEstablishment);
          }
          if (this.user.addDateOfBirth) {
            this.user.addDateOfBirth = this.formatDateForInput(this.user.addDateOfBirth);
          }
          
        },
        error: (err) => {
          alert('User not found.');
          this.router.navigate(['/admin/user']);
        }
      });
    }
  }
  

  // Helper method to format date to YYYY-MM-DD format for date input
  private formatDateForInput(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return ''; // Return empty if invalid date
    
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }
  onPhotoSelected(event: any) {
    const file = event.target.files[0];
    this.selectedPhoto = file;
  }
  onGstFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedGstFile = file;
  }
  // if (this.selectedPhoto) {
  //   formData.append('photo', this.selectedPhoto);
  // }
  
  // if (this.selectedGstFile) {
  //   formData.append('gstFile', this.selectedGstFile); // Must match backend property name
  // }

  onSubmit(form: any): void {
    if (!form.valid) {
      alert("Please fill all required fields.");
      return;
    }
    const formData = new FormData();
    for (const key in this.user) {
      if (this.user.hasOwnProperty(key) && this.user[key] != null && this.user[key] !== '') {
        let value = this.user[key];
        if (value instanceof Date) {
          value = value.toISOString();
        } else if (typeof value !== 'string') {
          value = String(value);
        }
        formData.append(key, value);
      }
    }
  
    if (this.selectedPhoto) {
      formData.append('photo', this.selectedPhoto);
    }
    if (this.selectedGstFile) {
      formData.append('gstFilePath', this.selectedGstFile); // Must match backend property name
    }
  
    if (this.isEditMode) {
      this.manageUserService.updateUser(formData, this.userId as number).subscribe({
        next: () => {
          alert('User updated successfully!');
          form.reset();
          this.router.navigate(['/admin/user']);
        },
        error: (error) => {
          console.error('Error updating user:', error);
          alert('Failed to update user!');
        }
      });
    } else {
      this.manageUserService.addUser(formData).subscribe({
        next: () => {
          alert('User created successfully');
          form.resetForm();
          this.router.navigate(['/admin/user']);
        },
        error: (error) => {
          console.error('Error creating user:', error);
          alert('Error creating user');
        }
      });
    }
  }
}



