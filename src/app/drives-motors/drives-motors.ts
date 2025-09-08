import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Brand } from '../model/brand.model';
interface EnquiryForm {
  name: string;
  phonenumber: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-drives-motors',
  imports: [CommonModule, FormsModule],
  templateUrl: './drives-motors.html',
  styleUrl: './drives-motors.css'
})
export class DrivesMotors implements OnInit {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'INVT',
      name: 'Schneider Electric India',
      image: 'assets/brands-logo/schneider-logo.png',
      title: 'Schneider Electric India',
      contactName: 'John Doe',
      mobile: '9876543210',
      whatsapp: '9876543210',
      landline: '020-1234567',
      email: 'info@schneider-electric.in',
      website: 'www.se.com/in',
      address: 'Pune, Maharashtra',
      dealing: 'Power management and automation solutions'
    },
    {
      id: 2,
      brandname: 'Crompton Greaves',
      name: 'Siemens',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Siemens India',
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
      id: 3,
      brandname: 'Danfoss',
      name: 'Danfoss India',
      image: 'assets/brands-logo/danfoss-logo.png',
      title: 'Danfoss Drives',
      contactName: 'Priya Mehta',
      mobile: '9876543223',
      whatsapp: '9876543223',
      landline: '020-1234569',
      email: 'sales@danfoss.in',
      website: 'www.danfoss.com',
      address: 'Chennai, India',
      dealing: 'Drives, Motors, Cooling systems'
    },
    {
      id: 4,
      brandname: 'Inovance',
      name: 'Siemens',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Siemens India',
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
      id: 5,
      brandname: 'Schneider',
      name: 'Schneider Electric India',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Schneider  India',
      contactName: 'Priya Mehta',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 6,
      brandname: 'Toshiba',
      name: 'Toshiba India',
      image: 'assets/brands-logo/toshiba-logo.png',
      title: 'Toshiba Industrial Products',
      contactName: 'Rajesh Kumar',
      mobile: '9876543234',
      whatsapp: '9876543234',
      landline: '044-1234567',
      email: 'info@toshiba-india.com',
      website: 'www.toshiba-india.com',
      address: 'Bangalore, Karnataka',
      dealing: 'Industrial motors, drives, and automation solutions'
    },
    {
      id: 7,
      brandname: 'Vacon',
      name: 'Vacon',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Vacon Drives',
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
      id: 8,
      brandname: 'Delta',
      name: 'Delta',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Delta Drives',
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
      id: 9,
      brandname: 'Lenze',
      name: 'Lenze',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Lenze Drives',
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
      id: 10,
      brandname: 'Mitsubishi',
      name: 'Mitsubishi',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Mitsubishi Drives',
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
      id: 11,
      brandname: 'Yaskawa',
      name: 'Yaskawa',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Yaskawa India',
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
      id: 12,
      brandname: 'Allen Bradley',
      name: 'Allen Bradley',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Allen Bradley Drives',
      contactName: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    // Add more brands as needed
  ];

  enquiryform: EnquiryForm = {
    name: '',
    phonenumber: '',
    email: '',
    message: '',

  };
  constructor(private http: HttpClient, private route: ActivatedRoute) {
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
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  }
  closeEnquiryModal(): void {
    const modal = document.getElementById('enquiryModal') as HTMLElement | null;
    if (modal) modal.style.display = 'none';
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Data:', this.enquiryform); // Debug: check data being sent
      this.http.post(`${environment.apiUrl}/api/enquiry/submit`, this.enquiryform).subscribe({
        next: (res) => {
          alert('Thank you for contacting us! We will get back to you soon.');
          form.resetForm();
        },
        error: () => {
          alert('There was an error submitting your form. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            // Calculate the position to scroll to (accounting for fixed header if any)
            const yOffset = -200; // Adjust this value based on your header height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });

            // Alternative approach if the above doesn't work well
            // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); // Slightly increased delay to ensure DOM is ready
      }
    });
  }
}
