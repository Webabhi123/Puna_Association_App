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
  selector: 'app-induction',
  imports: [CommonModule,FormsModule],
  templateUrl: './induction.html',
  styleUrl: './induction.css'
})
export class Induction {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: "Bajaj",
      name: "Bajaj Appliances Ltd.",
      image: "bajaj.png",
      title: "Innovative Home & Kitchen Appliances",
      contactName: "Rohit Sharma",
      mobile: "9876543210",
      whatsapp: "9876543210",
      landline: "0221234567",
      email: "info@bajajappliances.com",
      website: "www.bajajappliances.com",
      address: "Bajaj Bhavan, Mumbai, India",
      dealing: "Mixer Grinders, Cooktops, Juicers, Irons"
    },
    {
      id: 2,
      brandname: "Butterfly",
      name: "Butterfly Gandhimathi Appliances",
      image: "butterfly.png",
      title: "Modern Kitchen Companion",
      contactName: "Meena Iyer",
      mobile: "9811122244",
      whatsapp: "9811122244",
      landline: "0442345678",
      email: "care@butterflyindia.com",
      website: "www.butterflyindia.com",
      address: "Chennai, Tamil Nadu, India",
      dealing: "Mixer Grinders, Cooktops, Pressure Cookers, Kitchen Appliances"
    },
    {
      id: 3,
      brandname: "Havells",
      name: "Havells India Ltd.",
      image: "havells.png",
      title: "Premium Electrical & Kitchen Appliances",
      contactName: "Anil Sinha",
      mobile: "9823001122",
      whatsapp: "9823001122",
      landline: "0120456789",
      email: "support@havells.com",
      website: "www.havells.com",
      address: "Noida, Uttar Pradesh, India",
      dealing: "Fans, Irons, Mixer Grinders, Kitchen Appliances"
    },
    {
      id: 4,
      brandname: "Kent",
      name: "Kent RO Systems Ltd.",
      image: "kent.png",
      title: "Health & Purity Appliances",
      contactName: "Suresh Gupta",
      mobile: "9830098765",
      whatsapp: "9830098765",
      landline: "01122334455",
      email: "info@kent.co.in",
      website: "www.kent.co.in",
      address: "Noida, Uttar Pradesh, India",
      dealing: "Water Purifiers, Kitchen Appliances, Air Purifiers"
    },
    {
      id: 5,
      brandname: "Kutchina",
      name: "Kutchina Appliances",
      image: "kutchina.png",
      title: "Innovative Kitchen Solutions",
      contactName: "Priya Sen",
      mobile: "9845123467",
      whatsapp: "9845123467",
      landline: "03322330077",
      email: "care@kutchina.com",
      website: "www.kutchina.com",
      address: "Kolkata, West Bengal, India",
      dealing: "Chimneys, Hobs, Small Kitchen Appliances"
    },
    {
      id: 6,
      brandname: "Maharaja",
      name: "Maharaja Whiteline",
      image: "maharaja.png",
      title: "Trusted Kitchen Appliances Brand",
      contactName: "Ravi Malhotra",
      mobile: "9822113344",
      whatsapp: "9822113344",
      landline: "01122331144",
      email: "support@maharajawhiteline.com",
      website: "www.maharajawhiteline.com",
      address: "New Delhi, India",
      dealing: "Mixer Grinders, Juicers, Food Processors"
    },
    {
      id: 7,
      brandname: "Morphy Richards",
      name: "Morphy Richards India",
      image: "morphyrichards.png",
      title: "Global Brand for Kitchen & Home",
      contactName: "Amit Kapoor",
      mobile: "9823456789",
      whatsapp: "9823456789",
      landline: "0207654321",
      email: "care@morphyrichardsindia.com",
      website: "www.morphyrichardsindia.com",
      address: "Pune, Maharashtra, India",
      dealing: "Toasters, Coffee Makers, Microwave Ovens, Irons"
    },
    {
      id: 8,
      brandname: "Philips",
      name: "Philips India Ltd.",
      image: "philips.png",
      title: "Innovative Lifestyle & Kitchen Appliances",
      contactName: "Sonia Mehra",
      mobile: "9830012345",
      whatsapp: "9830012345",
      landline: "03322334455",
      email: "customercare@philips.com",
      website: "www.philips.co.in",
      address: "Kolkata, West Bengal, India",
      dealing: "Blenders, Air Fryers, Coffee Makers, Kitchen Appliances"
    },
    {
      id: 9,
      brandname: "Pigeon",
      name: "Stovekraft Pigeon",
      image: "pigeon.png",
      title: "Affordable & Modern Kitchen Essentials",
      contactName: "Manish Patil",
      mobile: "9845011122",
      whatsapp: "9845011122",
      landline: "08022335544",
      email: "support@pigeonappliances.com",
      website: "www.pigeonappliances.com",
      address: "Bangalore, Karnataka, India",
      dealing: "Cooktops, Mixer Grinders, Pressure Cookers, Appliances"
    },
    {
      id: 10,
      brandname: "Preethi",
      name: "Preethi Kitchen Appliances",
      image: "preethi.png",
      title: "Powerful Kitchen Companion",
      contactName: "Kavya Nair",
      mobile: "9876012345",
      whatsapp: "9876012345",
      landline: "04422337788",
      email: "care@preethi.in",
      website: "www.preethi.in",
      address: "Chennai, Tamil Nadu, India",
      dealing: "Mixer Grinders, Cooktops, Kitchen Appliances"
    },
    {
      id: 11,
      brandname: "Singer",
      name: "Singer India Ltd.",
      image: "singer.png",
      title: "Trusted Home & Sewing Appliances",
      contactName: "Rajesh Kumar",
      mobile: "9845123456",
      whatsapp: "9845123456",
      landline: "0809876543",
      email: "info@singerindia.net",
      website: "www.singerindia.net",
      address: "Bangalore, Karnataka, India",
      dealing: "Sewing Machines, Irons, Mixer Grinders, Kitchen Appliances"
    },
    {
      id: 12,
      brandname: "Sunflame",
      name: "Sunflame Enterprises Pvt. Ltd.",
      image: "sunflame.png",
      title: "Innovative Kitchen Solutions",
      contactName: "Deepak Sharma",
      mobile: "9811198765",
      whatsapp: "9811198765",
      landline: "01202334455",
      email: "support@sunflame.com",
      website: "www.sunflame.com",
      address: "Faridabad, Haryana, India",
      dealing: "Chimneys, Cooktops, Ovens, Kitchen Appliances"
    },
    {
      id: 13,
      brandname: "V-Guard",
      name: "V-Guard Industries Ltd.",
      image: "vguard.png",
      title: "Trusted Electrical & Kitchen Appliances",
      contactName: "Sanjay Pillai",
      mobile: "9847098765",
      whatsapp: "9847098765",
      landline: "0484234567",
      email: "info@vguard.in",
      website: "www.vguard.in",
      address: "Kochi, Kerala, India",
      dealing: "Stabilizers, Fans, Water Heaters, Kitchen Appliances"
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
