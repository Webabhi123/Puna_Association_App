import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { Renderer2 } from '@angular/core';
interface EnquiryForm {
  name: string;
  phonenumber: string;
  email: string;
  message: string;  
}
interface Brand {
  id: number;
  explorebrandname:string;
  image: string;
  title: string;
  name: string;
  mobile: string;
  whatsapp: string;
  landline: string;
  email: string;
  website: string;
  address: string;
  dealing: string;
}
@Component({
  selector: 'app-automation-systems',
  imports: [CommonModule,FormsModule  ],
  templateUrl: './automation-systems.html',
  styleUrl: './automation-systems.css',
  standalone: true
})
export class AutomationSystems {
  showEnquiryForm=false;
  selectedBrand: Brand | null = null;

  brands:Brand[]=[
    {
      id:1,
      explorebrandname:'Siemens',
      image:'assets/images/productsimage/brand-dealing.jpg',
      title:'Maharashtra Switchgear & Cable',
      name:'Vijay Solanki',
      mobile:'9922418188',
      whatsapp:'9922418188',
      landline:'020-1234567',
      email:'vijay.solanki@maharashtraswitchgear.com',
      website:'www.se.com/in',
      address:'Shop No.1, 1300/1/2,Kasba Peth, Pawale Chowk, Prathmesh Heights, Pune- 411011',
      dealing:'Whole trading electrical products'
    },
    {
      id: 2,
      explorebrandname:'Mitsubishi',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Siemens India',
      name: 'Jane Smith',
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
      explorebrandname:'Schneider',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Schneider Electric',
      name: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 4,
      explorebrandname:'Allen Bradley',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Allen Electrical',
      name: 'Jane Smith',
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
      explorebrandname:'Delta',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Delta India',
      name: 'Jane Smith',
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
      explorebrandname:'Inovance',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Inovance India',
      name: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    },
    {
      id: 7,
      explorebrandname:'INVT',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'INVT',
      name: 'Tester',
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
      explorebrandname:'Fanuc',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Fanuc India',
      name: 'Jane Smith',
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
      explorebrandname:'Messung',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Messung India',
      name: 'Jane Smith',
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
      explorebrandname:'Rexroth',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Rexroth India',
      name: 'Jane Smith',
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
      explorebrandname:'Yaskawa',
      image: 'assets/brands-logo/siemens-logo.png',
      title: 'Yaskawa India',
      name: 'Jane Smith',
      mobile: '9876543211',
      whatsapp: '9876543211',
      landline: '020-1234568',
      email: 'contact@siemens.in',
      website: 'www.siemens.com/in',
      address: 'Mumbai, Maharashtra',
      dealing: 'Automation and control systems'
    
    },
  ]

  enquiryform: EnquiryForm = {
    name: '',
    phonenumber: '',
    email: '',
    message: '',

  };
  constructor(private http: HttpClient,private renderer: Renderer2) {
    if(this.brands.length>0){
      this.selectedBrand=this.brands[0];
    }
  }
  selectBrand(brand:Brand){
    this.selectedBrand=brand;
  }

  ngAfterViewInit(): void {
    const modal = document.getElementById('imgModal') as HTMLElement;
    const modalImg = document.getElementById('modalImg') as HTMLImageElement;
    const modalClose = document.getElementById('modalClose') as HTMLElement;
    const images = document.querySelectorAll('.product-image img');

    // Add click listener to each image
    images.forEach(img => {
      this.renderer.listen(img, 'click', () => {
        modal.style.display = 'block';
        modalImg.src = (img as HTMLImageElement).src;
      });
    });

    // Close modal on close button click
    if (modalClose) {
      this.renderer.listen(modalClose, 'click', () => {
        modal.style.display = 'none';
      });
    }

    // Close modal when clicking outside the image
    this.renderer.listen(window, 'click', (event: Event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
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

}
