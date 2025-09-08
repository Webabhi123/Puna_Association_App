import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../model/brand.model';

interface EnquiryForm {
  name: string;
  phonenumber: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-electric-ac-motors',
  imports: [CommonModule, FormsModule],
  templateUrl: './electric-ac-motors.html',
  styleUrl: './electric-ac-motors.css'
})
export class ElectricAcMotors {
  showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      {
        id: 1,
        brandname: 'ABB',
        name: 'ABB',
        image: 'assets/brands-logo/abb-logo.png',
        title: 'ABB',
        contactName: 'John Doe',
        mobile: '9876543210',
        whatsapp: '9876543210',
        landline: '020-1111111',
        email: 'info@abb.com',
        website: 'www.abb.com',
        address: 'Pune, Maharashtra',
        dealing: 'Power and automation technologies'
      },
      {
        id: 2,
        brandname: 'Atlas Copco',
        name: 'Atlas Copco',
        image: 'assets/brands-logo/atlascopco-logo.png',
        title: 'Atlas Copco',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-2222222',
        email: 'info@atlascopco.com',
        website: 'www.atlascopco.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Industrial tools and equipment'
      },
      {
        id: 3,
        brandname: 'Baldor',
        name: 'Baldor',
        image: 'assets/brands-logo/baldor-logo.png',
        title: 'Baldor',
        contactName: 'Mike Johnson',
        mobile: '9876543212',
        whatsapp: '9876543212',
        landline: '020-3333333',
        email: 'info@baldor.com',
        website: 'www.baldor.com',
        address: 'Delhi, India',
        dealing: 'Motors and drives'
      },
      {
        id: 4,
        brandname: 'Bharat Bijlee',
        name: 'Bharat Bijlee',
        image: 'assets/brands-logo/bharatbijlee-logo.png',
        title: 'Bharat Bijlee',
        contactName: 'Amit Kumar',
        mobile: '9876543213',
        whatsapp: '9876543213',
        landline: '020-4444444',
        email: 'info@bharatbijlee.com',
        website: 'www.bharatbijlee.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Electrical engineering and automation'
      },
      {
        id: 5,
        brandname: 'Bonfiglioli',
        name: 'Bonfiglioli',
        image: 'assets/brands-logo/bonfiglioli-logo.png',
        title: 'Bonfiglioli',
        contactName: 'Sara Lee',
        mobile: '9876543214',
        whatsapp: '9876543214',
        landline: '020-5555555',
        email: 'info@bonfiglioli.com',
        website: 'www.bonfiglioli.com',
        address: 'Chennai, Tamil Nadu',
        dealing: 'Gearboxes and drive systems'
      },
      {
        id: 6,
        brandname: 'Crompton Greaves',
        name: 'Crompton Greaves',
        image: 'assets/brands-logo/crompton-logo.png',
        title: 'Crompton Greaves',
        contactName: 'Ravi Sharma',
        mobile: '9876543215',
        whatsapp: '9876543215',
        landline: '020-6666666',
        email: 'info@cromptongreaves.com',
        website: 'www.cromptongreaves.com',
        address: 'Pune, Maharashtra',
        dealing: 'Electrical equipment manufacturing'
      },
      {
        id: 7,
        brandname: 'Delta',
        name: 'Delta',
        image: 'assets/brands-logo/delta-logo.png',
        title: 'Delta',
        contactName: 'Neha Singh',
        mobile: '9876543216',
        whatsapp: '9876543216',
        landline: '020-7777777',
        email: 'info@deltaww.com',
        website: 'www.deltaww.com',
        address: 'Bangalore, Karnataka',
        dealing: 'Power and thermal management'
      },
      {
        id: 8,
        brandname: 'Godrej Lawkim',
        name: 'Godrej Lawkim',
        image: 'assets/brands-logo/godrejlawkim-logo.png',
        title: 'Godrej Lawkim',
        contactName: 'Anjali Mehta',
        mobile: '9876543217',
        whatsapp: '9876543217',
        landline: '020-8888888',
        email: 'info@godrejlawkim.com',
        website: 'www.godrej.com/lawkim',
        address: 'Mumbai, Maharashtra',
        dealing: 'Motors and solutions'
      },
      {
        id: 9,
        brandname: 'Havells',
        name: 'Havells',
        image: 'assets/brands-logo/havells-logo.png',
        title: 'Havells',
        contactName: 'Rahul Verma',
        mobile: '9876543218',
        whatsapp: '9876543218',
        landline: '020-9999999',
        email: 'info@havells.com',
        website: 'www.havells.com',
        address: 'Noida, Uttar Pradesh',
        dealing: 'Electrical consumer goods'
      },
      {
        id: 10,
        brandname: 'Hindustan',
        name: 'Hindustan',
        image: 'assets/brands-logo/hindustan-logo.png',
        title: 'Hindustan',
        contactName: 'Priya Desai',
        mobile: '9876543219',
        whatsapp: '9876543219',
        landline: '020-1010101',
        email: 'info@hindustan.com',
        website: 'www.hindustan.com',
        address: 'Pune, Maharashtra',
        dealing: 'Motors and automation'
      },
      {
        id: 11,
        brandname: 'Kirloskar',
        name: 'Kirloskar',
        image: 'assets/brands-logo/kirloskar-logo.png',
        title: 'Kirloskar',
        contactName: 'Vikas Patil',
        mobile: '9876543220',
        whatsapp: '9876543220',
        landline: '020-1212121',
        email: 'info@kirloskar.com',
        website: 'www.kirloskar.com',
        address: 'Pune, Maharashtra',
        dealing: 'Engines and pumps'
      },
      {
        id: 12,
        brandname: 'Lenze',
        name: 'Lenze',
        image: 'assets/brands-logo/lenze-logo.png',
        title: 'Lenze',
        contactName: 'Meera Nair',
        mobile: '9876543221',
        whatsapp: '9876543221',
        landline: '020-1313131',
        email: 'info@lenze.com',
        website: 'www.lenze.com',
        address: 'Chennai, Tamil Nadu',
        dealing: 'Drive and automation systems'
      },
      {
        id: 13,
        brandname: 'Marathon',
        name: 'Marathon',
        image: 'assets/brands-logo/marathon-logo.png',
        title: 'Marathon',
        contactName: 'Kunal Joshi',
        mobile: '9876543222',
        whatsapp: '9876543222',
        landline: '020-1414141',
        email: 'info@marathon.com',
        website: 'www.marathon.com',
        address: 'Mumbai, Maharashtra',
        dealing: 'Motors and power solutions'
      },
      {
        id: 14,
        brandname: 'Panasonic',
        name: 'Panasonic',
        image: 'assets/brands-logo/panasonic-logo.png',
        title: 'Panasonic',
        contactName: 'Sneha Kapoor',
        mobile: '9876543223',
        whatsapp: '9876543223',
        landline: '020-1515151',
        email: 'info@panasonic.com',
        website: 'www.panasonic.com',
        address: 'Delhi, India',
        dealing: 'Electronics and automation'
      },
      {
        id: 15,
        brandname: 'Siemens',
        name: 'Siemens',
        image: 'assets/brands-logo/siemens-logo.png',
        title: 'Siemens',
        contactName: 'Jane Smith',
        mobile: '9876543211',
        whatsapp: '9876543211',
        landline: '020-1234568',
        email: 'contact@siemens.in',
        website: 'www.siemens.com/in',
        address: 'Mumbai, Maharashtra',
        dealing: 'Automation and control systems'
      },
      {
        id: 16,
        brandname: 'Weg',
        name: 'Weg',
        image: 'assets/brands-logo/weg-logo.png',
        title: 'Weg',
        contactName: 'Arjun Reddy',
        mobile: '9876543224',
        whatsapp: '9876543224',
        landline: '020-1616161',
        email: 'info@weg.com',
        website: 'www.weg.net',
        address: 'Bangalore, Karnataka',
        dealing: 'Motors and industrial solutions'
      }
    ];
    
  
    enquiryform: EnquiryForm = {
      name: '',
      phonenumber: '',
      email: '',
      message: '',
    };
  
    constructor(private http: HttpClient) {
      // Select the first brand by default
      if (this.brands.length > 0) {
        this.selectedBrand = this.brands[0];
      }
    }
  
    // Select a brand to display its details
    selectBrand(brand: Brand): void {
      this.selectedBrand = brand;
    }
    
    // Open the enquiry modal
    openEnquiryModal(): void {
      const modal = document.getElementById('enquiryModal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    }
    
    closeEnquiryModal(): void {
      const modal = document.getElementById('enquiryModal') as HTMLElement | null;
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
    
    onSubmit(form: NgForm): void {
      if (form.valid) {
        console.log('Form Data:', this.enquiryform);
        this.http.post(`${environment.apiUrl}/api/enquiry/submit`, this.enquiryform).subscribe({
          next: (res) => {
            alert('Thank you for contacting us! We will get back to you soon.');
            form.resetForm();
            this.closeEnquiryModal();
          },
          error: () => {
            alert('There was an error submitting your form. Please try again.');
          }
        });
      } else {
        alert('Please fill in all required fields.');
      }
    }

}
