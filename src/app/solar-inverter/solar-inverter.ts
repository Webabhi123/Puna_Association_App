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
  selector: 'app-solar-inverter',
  imports: [CommonModule,FormsModule],
  templateUrl: './solar-inverter.html',
  styleUrl: './solar-inverter.css'
})
export class SolarInverter {
  showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      { "id": 1, "brandname": "ABB", "name": "ABB Inverter", "image": "abb.png", "title": "Reliable Industrial Inverter", "contactName": "Rajesh Mehta", "mobile": "9876543210", "whatsapp": "9876543210", "landline": "020-26478900", "email": "support@abb.com", "website": "https://new.abb.com/", "address": "Pune, Maharashtra", "dealing": "Solar Inverters, UPS" },
      { "id": 2, "brandname": "BPE", "name": "BPE Power", "image": "bpe.png", "title": "Efficient Energy Solutions", "contactName": "Amit Sharma", "mobile": "9876501234", "whatsapp": "9876501234", "landline": "011-22334455", "email": "info@bpeindia.com", "website": "https://bpeindia.com/", "address": "Delhi, India", "dealing": "UPS, Inverters, Solar Systems" },
      { "id": 3, "brandname": "Consul Neowatt", "name": "Consul Neowatt", "image": "consulneowatt.png", "title": "India’s Leading UPS & Inverter Brand", "contactName": "Kiran Patil", "mobile": "9822011223", "whatsapp": "9822011223", "landline": "020-24456789", "email": "sales@consulneowatt.com", "website": "https://consulneowatt.com/", "address": "Bangalore, Karnataka", "dealing": "Inverters, Solar, UPS" },
      { "id": 4, "brandname": "Eastman", "name": "Eastman Energy", "image": "eastman.png", "title": "Trusted Solar Inverter Brand", "contactName": "Nikhil Verma", "mobile": "9998877665", "whatsapp": "9998877665", "landline": "0172-2345678", "email": "info@eastmanpvtltd.com", "website": "https://eastmanpvtltd.com/", "address": "Punjab, India", "dealing": "Solar Inverters, Batteries" },
      { "id": 5, "brandname": "Enphase", "name": "Enphase Energy", "image": "enphase.png", "title": "Global Solar Microinverter Leader", "contactName": "Ravi Kapoor", "mobile": "9812345670", "whatsapp": "9812345670", "landline": "011-45678912", "email": "support@enphase.com", "website": "https://enphase.com/", "address": "California, USA", "dealing": "Microinverters, Solar Solutions" },
      { "id": 6, "brandname": "EAPRO", "name": "EAPRO Global", "image": "eapro.png", "title": "Smart Solar Inverter Manufacturer", "contactName": "Sunil Joshi", "mobile": "9877701122", "whatsapp": "9877701122", "landline": "0120-4567789", "email": "contact@eapro.in", "website": "https://eapro.in/", "address": "Noida, UP", "dealing": "Solar Inverters, Batteries" },
      { "id": 7, "brandname": "Flin Energy", "name": "Flin Energy", "image": "flinenergy.png", "title": "Next-Gen Solar Power Solutions", "contactName": "Manoj Singh", "mobile": "9765432101", "whatsapp": "9765432101", "landline": "022-33445566", "email": "sales@flinenergy.com", "website": "https://flinenergy.com/", "address": "Mumbai, Maharashtra", "dealing": "Hybrid Inverters, Solar Power" },
      { "id": 8, "brandname": "Fronius", "name": "Fronius Solar", "image": "fronius.png", "title": "Premium Austrian Inverters", "contactName": "Rohit Shetty", "mobile": "9933445566", "whatsapp": "9933445566", "landline": "080-22112233", "email": "info@fronius.com", "website": "https://fronius.com/", "address": "Austria / India", "dealing": "Solar Inverters, EV Chargers" },
      { "id": 9, "brandname": "Goodwe", "name": "Goodwe Solar", "image": "goodwe.png", "title": "Smart Solar Inverter Technology", "contactName": "Arun Gupta", "mobile": "9822445566", "whatsapp": "9822445566", "landline": "022-22223333", "email": "support@goodwe.com", "website": "https://goodwe.com/", "address": "China / India", "dealing": "Solar Inverters, Storage" },
      { "id": 10, "brandname": "Growatt", "name": "Growatt Inverters", "image": "growatt.png", "title": "Top-Rated Residential Inverter", "contactName": "Pankaj Jain", "mobile": "9811223344", "whatsapp": "9811223344", "landline": "011-33445566", "email": "info@growatt.com", "website": "https://growatt.com/", "address": "Shenzhen, China", "dealing": "Solar Inverters, Storage Systems" },
      { "id": 11, "brandname": "Kaco", "name": "Kaco Solar", "image": "kaco.png", "title": "German Engineering in Inverters", "contactName": "Vikas Rao", "mobile": "9898989898", "whatsapp": "9898989898", "landline": "020-22334455", "email": "sales@kaco.com", "website": "https://kaco.com/", "address": "Germany", "dealing": "Solar Inverters" },
      { "id": 12, "brandname": "Ksolare", "name": "Ksolare Energy", "image": "ksolare.png", "title": "Indian Solar Inverter Brand", "contactName": "Deepak Patel", "mobile": "9844112233", "whatsapp": "9844112233", "landline": "080-33445566", "email": "info@ksolare.com", "website": "https://ksolare.com/", "address": "Ahmedabad, Gujarat", "dealing": "Solar Inverters, Energy Solutions" },
      { "id": 13, "brandname": "Kstar", "name": "Kstar Power", "image": "kstar.png", "title": "UPS & Solar Inverter Specialist", "contactName": "Suresh Babu", "mobile": "9977886655", "whatsapp": "9977886655", "landline": "011-77889900", "email": "support@kstar.com", "website": "https://kstar.com/", "address": "China / India", "dealing": "Inverters, UPS, Solar" },
      { "id": 14, "brandname": "Polycab", "name": "Polycab Solar", "image": "polycab.png", "title": "Leading Indian Solar Solutions", "contactName": "Prakash Nair", "mobile": "9811112223", "whatsapp": "9811112223", "landline": "022-45678901", "email": "info@polycab.com", "website": "https://polycab.com/", "address": "Mumbai, India", "dealing": "Cables, Solar Inverters" },
      { "id": 15, "brandname": "Power One", "name": "Power One Solar", "image": "powerone.png", "title": "High-Performance Solar Inverters", "contactName": "Ramesh Rao", "mobile": "9911991199", "whatsapp": "9911991199", "landline": "080-22334455", "email": "sales@poweroneups.com", "website": "https://poweroneups.com/", "address": "Bangalore, Karnataka", "dealing": "Solar Inverters, UPS" },
      { "id": 16, "brandname": "Schneider", "name": "Schneider Electric", "image": "schneider.png", "title": "Smart Energy Management", "contactName": "Aditya Menon", "mobile": "9833445566", "whatsapp": "9833445566", "landline": "022-33445566", "email": "support@schneider.com", "website": "https://se.com/", "address": "France / India", "dealing": "Inverters, Electricals, Solar" },
      { "id": 17, "brandname": "SMA", "name": "SMA Solar", "image": "sma.png", "title": "German Solar Power Technology", "contactName": "Rohit Kulkarni", "mobile": "9866554433", "whatsapp": "9866554433", "landline": "020-33445577", "email": "info@sma.de", "website": "https://sma.de/", "address": "Germany", "dealing": "Solar Inverters" },
      { "id": 18, "brandname": "SolarEdge", "name": "SolarEdge", "image": "solaredge.png", "title": "Optimized Solar Power Systems", "contactName": "Ashok Gupta", "mobile": "9811998877", "whatsapp": "9811998877", "landline": "011-44556677", "email": "support@solaredge.com", "website": "https://solaredge.com/", "address": "Israel / Global", "dealing": "Inverters, Optimizers" },
      { "id": 19, "brandname": "SolaX", "name": "SolaX Power", "image": "solax.png", "title": "Innovative Solar Power Solutions", "contactName": "Harish Chandra", "mobile": "9822001122", "whatsapp": "9822001122", "landline": "080-99887766", "email": "info@solaxpower.com", "website": "https://solaxpower.com/", "address": "China", "dealing": "Solar Inverters, Hybrid Systems" },
      { "id": 20, "brandname": "Statcon", "name": "Statcon Energiaa", "image": "statcon.png", "title": "Indian Solar Inverter Manufacturer", "contactName": "Sanjay Tiwari", "mobile": "9811220099", "whatsapp": "9811220099", "landline": "0120-33445588", "email": "sales@statconenergiaa.com", "website": "https://statconenergiaa.com/", "address": "Noida, India", "dealing": "Solar Inverters, Energy Systems" },
      { "id": 21, "brandname": "Sungrow", "name": "Sungrow Power", "image": "sungrow.png", "title": "Global Solar Inverter Brand", "contactName": "Akhil Sharma", "mobile": "9844556677", "whatsapp": "9844556677", "landline": "011-44556677", "email": "support@sungrowpower.com", "website": "https://sungrowpower.com/", "address": "China", "dealing": "Solar Inverters, Energy Storage" },
      { "id": 22, "brandname": "VERTIV", "name": "VERTIV Energy", "image": "vertiv.png", "title": "Critical Infrastructure & UPS", "contactName": "Shankar Menon", "mobile": "9777888999", "whatsapp": "9777888999", "landline": "022-55667788", "email": "support@vertiv.com", "website": "https://vertiv.com/", "address": "USA / India", "dealing": "Inverters, UPS, Data Center Power" },
      { "id": 23, "brandname": "Waaree", "name": "Waaree Energies", "image": "waaree.png", "title": "Indian Solar Giant", "contactName": "Manish Patel", "mobile": "9877001122", "whatsapp": "9877001122", "landline": "022-33445599", "email": "info@waaree.com", "website": "https://waaree.com/", "address": "Mumbai, India", "dealing": "Solar Inverters, Panels" },
      { "id": 24, "brandname": "Zever", "name": "Zever Solar", "image": "zever.png", "title": "Affordable Solar Inverter Brand", "contactName": "Ravi Narayan", "mobile": "9811223345", "whatsapp": "9811223345", "landline": "011-99887766", "email": "info@zeversolar.com", "website": "https://zeversolar.com/", "address": "China", "dealing": "Solar Inverters" }
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
