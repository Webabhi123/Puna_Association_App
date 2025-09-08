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
  selector: 'app-solar-water-heater',
  imports: [CommonModule, FormsModule],
  templateUrl: './solar-water-heater.html',
  styleUrl: './solar-water-heater.css'
})
export class SolarWaterHeater {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
      {
        "id": 1,
        "brandname": "Anu",
        "name": "Anu Solar",
        "image": "anu.png",
        "title": "Solar Water Heater Solutions",
        "contactName": "Rajesh Kumar",
        "mobile": "9876543210",
        "whatsapp": "9876543210",
        "landline": "020-12345678",
        "email": "contact@anusolar.com",
        "website": "www.anusolar.com",
        "address": "Bangalore, Karnataka",
        "dealing": "Solar Water Heaters, Solar Panels"
      },
      {
        "id": 2,
        "brandname": "Benchmark",
        "name": "Benchmark Solar",
        "image": "benchmark.png",
        "title": "Renewable Energy Products",
        "contactName": "Suresh Patil",
        "mobile": "9876500001",
        "whatsapp": "9876500001",
        "landline": "022-76543210",
        "email": "info@benchmark.com",
        "website": "www.benchmark.com",
        "address": "Pune, Maharashtra",
        "dealing": "Solar Heaters, Solar Inverters"
      },
      {
        "id": 3,
        "brandname": "Bosch",
        "name": "Bosch Solar",
        "image": "bosch.png",
        "title": "Smart Solar Water Heating",
        "contactName": "Anil Deshmukh",
        "mobile": "9876512345",
        "whatsapp": "9876512345",
        "landline": "020-22334455",
        "email": "solar@bosch.com",
        "website": "www.bosch-solar.com",
        "address": "Mumbai, Maharashtra",
        "dealing": "Solar Water Heaters, Heat Pumps"
      },
      {
        "id": 4,
        "brandname": "Electra",
        "name": "Electra Solar",
        "image": "electra.png",
        "title": "Solar Power & Heaters",
        "contactName": "Vinod Sharma",
        "mobile": "9876523456",
        "whatsapp": "9876523456",
        "landline": "011-33445566",
        "email": "support@electra.com",
        "website": "www.electra.com",
        "address": "Delhi NCR",
        "dealing": "Solar Water Heaters, Solar Street Lights"
      },
      {
        "id": 5,
        "brandname": "Emmvee",
        "name": "Emmvee Solar",
        "image": "emmvee.png",
        "title": "Smart Renewable Solutions",
        "contactName": "Kiran Shetty",
        "mobile": "9876534567",
        "whatsapp": "9876534567",
        "landline": "080-44556677",
        "email": "sales@emmvee.com",
        "website": "www.emmvee.com",
        "address": "Bangalore, Karnataka",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 6,
        "brandname": "Farmson",
        "name": "Farmson Solar",
        "image": "farmson.png",
        "title": "Water Heating & Energy",
        "contactName": "Deepak Patel",
        "mobile": "9876545678",
        "whatsapp": "9876545678",
        "landline": "079-55667788",
        "email": "contact@farmson.com",
        "website": "www.farmson.com",
        "address": "Ahmedabad, Gujarat",
        "dealing": "Solar Heaters, Solar Pumps"
      },
      {
        "id": 7,
        "brandname": "Haier",
        "name": "Haier Solar",
        "image": "haier.png",
        "title": "Solar Water Heater Systems",
        "contactName": "Manoj Gupta",
        "mobile": "9876556789",
        "whatsapp": "9876556789",
        "landline": "022-66778899",
        "email": "info@haier-solar.com",
        "website": "www.haier-solar.com",
        "address": "Mumbai, Maharashtra",
        "dealing": "Solar Water Heaters"
      },
      {
        "id": 8,
        "brandname": "Havells",
        "name": "Havells Solar",
        "image": "havells.png",
        "title": "Smart Solar Energy",
        "contactName": "Ravi Shankar",
        "mobile": "9876567890",
        "whatsapp": "9876567890",
        "landline": "011-77889900",
        "email": "solar@havells.com",
        "website": "www.havells-solar.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, Solar Lighting"
      },
      {
        "id": 9,
        "brandname": "Honeywell",
        "name": "Honeywell Solar",
        "image": "honeywell.png",
        "title": "Smart Energy Systems",
        "contactName": "Amit Khanna",
        "mobile": "9876578901",
        "whatsapp": "9876578901",
        "landline": "022-88990011",
        "email": "energy@honeywell.com",
        "website": "www.honeywell-solar.com",
        "address": "Mumbai, Maharashtra",
        "dealing": "Solar Water Heaters, Heat Controllers"
      },
      {
        "id": 10,
        "brandname": "Hykon",
        "name": "Hykon Solar",
        "image": "hykon.png",
        "title": "Solar & Renewable Energy",
        "contactName": "Sandeep Menon",
        "mobile": "9876589012",
        "whatsapp": "9876589012",
        "landline": "0484-1234567",
        "email": "support@hykon.com",
        "website": "www.hykon.com",
        "address": "Kochi, Kerala",
        "dealing": "Solar Water Heaters, Inverters"
      },
      {
        "id": 11,
        "brandname": "InterSolar",
        "name": "Inter Solar Systems",
        "image": "intersolar.png",
        "title": "Advanced Solar Heating Solutions",
        "contactName": "Prakash Mehta",
        "mobile": "9876590123",
        "whatsapp": "9876590123",
        "landline": "0172-2233445",
        "email": "info@intersolar.in",
        "website": "www.intersolar.in",
        "address": "Chandigarh",
        "dealing": "Solar Water Heaters, Solar Power Systems"
      },
      {
        "id": 12,
        "brandname": "Jain",
        "name": "Jain",
        "image": "jain.png",
        "title": "Trusted Solar Water Heaters",
        "contactName": "Rohit Sharma",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@kamalsolar.com",
        "website": "www.kamalsolar.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 13,
        "brandname": "Nuetech",
        "name": "Nuetech",
        "image": "nuetech.png",
        "title": "Solar Energy Solutions",
        "contactName": "Ajay Yadav",
        "mobile": "9876512346",
        "whatsapp": "9876512346",
        "landline": "0124-2233445",
        "email": "sales@kenbrooksolar.com",
        "website": "www.kenbrooksolar.com",
        "address": "Gurgaon, Haryana",
        "dealing": "Solar Water Heaters, Solar Panels"
      },
      {
        "id": 14,
        "brandname": "Omega",
        "name": "Omega",
        "image": "omega.png",
        "title": "Smart Water Heating",
        "contactName": "Satish Gupta",
        "mobile": "9876523457",
        "whatsapp": "9876523457",
        "landline": "011-55667788",
        "email": "support@lazersolar.com",
        "website": "www.lazersolar.com",
        "address": "New Delhi",
        "dealing": "Solar Water Heaters, Heat Pumps"
      },
      {
        "id": 15,
        "brandname": "Oems",
        "name": "Oems",
        "image": "oems.png",
        "title": "Innovative Water Heating",
        "contactName": "Vivek Menon",
        "mobile": "9876534568",
        "whatsapp": "9876534568",
        "landline": "020-66778899",
        "email": "info@racold.com",
        "website": "www.racold.com",
        "address": "Pune, Maharashtra",
        "dealing": "Solar Water Heaters, Geysers"
      },
      {
        "id": 16,
        "brandname": "Orb",
        "name": "Orb",
        "image": "orb.png",
        "title": "Renewable Energy Solutions",
        "contactName": "Harsh Patel",
        "mobile": "9876545679",
        "whatsapp": "9876545679",
        "landline": "079-33445566",
        "email": "contact@redren.com",
        "website": "www.redren.com",
        "address": "Ahmedabad, Gujarat",
        "dealing": "Solar Water Heaters, PV Modules"
      },
      {
        "id": 17,
        "brandname": "Powermax",
        "name": "Powermax",
        "image": "powermax.png",
        "title": "Sustainable Energy Solutions",
        "contactName": "Ramesh Iyer",
        "mobile": "9876556781",
        "whatsapp": "9876556781",
        "landline": "080-44556611",
        "email": "info@sunzone.com",
        "website": "www.sunzone.com",
        "address": "Bangalore, Karnataka",
        "dealing": "Solar Water Heaters, Solar Lighting"
      },
      {
        "id": 18,
        "brandname": "Racold",
        "name": "Racold",
        "image": "racold.png",
        "title": "Reliable Solar Water Heating",
        "contactName": "Deepak Kumar",
        "mobile": "9876567892",
        "whatsapp": "9876567892",
        "landline": "0821-2233445",
        "email": "support@supremesolar.com",
        "website": "www.supremesolar.com",
        "address": "Mysore, Karnataka",
        "dealing": "Solar Water Heaters, PV Modules"
      },
      {
        "id": 19,
        "brandname": "Redren",
        "name": "Redren",
        "image": "redren.png",
        "title": "Power of Trust in Solar",
        "contactName": "Ankit Singh",
        "mobile": "9876578903",
        "whatsapp": "9876578903",
        "landline": "022-44556677",
        "email": "solar@tata.com",
        "website": "www.tatasolar.com",
        "address": "Mumbai, Maharashtra",
        "dealing": "Solar Water Heaters, Solar Power Systems"
      },
      {
        "id": 20,
        "brandname": "Steam Power",
        "name": "Steam Power",
        "image": "steampower.png",
        "title": "Energy for the Future",
        "contactName": "Naveen Thomas",
        "mobile": "9876589014",
        "whatsapp": "9876589014",
        "landline": "0484-3344556",
        "email": "info@vguard.in",
        "website": "www.vguard.in",
        "address": "Kochi, Kerala",
        "dealing": "Solar Water Heaters, Electricals"
      },
      {
        "id": 21,
        "brandname": "Stellar",
        "name": "Stellar",
        "image": "stellar.png",
        "title": "India’s Largest Solar Company",
        "contactName": "Jatin Shah",
        "mobile": "9876590125",
        "whatsapp": "9876590125",
        "landline": "022-77889900",
        "email": "contact@waaree.com",
        "website": "www.waaree.com",
        "address": "Mumbai, Maharashtra",
        "dealing": "Solar Modules, Water Heaters, EPC Solutions"
      },
      {
        "id": 22,
        "brandname": "Sudarshan Saur",
        "name": "Sudarshan Saur",
        "image": "sudarshan.png",
        "title": "Solar Water Heaters",
        "contactName": "Ravi Kumar",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@sunmax.com",
        "website": "www.sunmax.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 23,
        "brandname": "Surya",
        "name": "Surya",
        "image": "surya.png",
        "title": "Solar Water Heaters",
        "contactName": "Ravi Kumar",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@sunmax.com",
        "website": "www.sunmax.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 24,
        "brandname": "Supreme",
        "name": "Supreme",
        "image": "supreme.png",
        "title": "Solar Water Heaters",
        "contactName": "Ravi Kumar",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@sunmax.com",
        "website": "www.sunmax.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 25,
        "brandname": "TATA",
        "name": "TATA Solar",
        "image": "tata.png",
        "title": "Solar Water Heaters",
        "contactName": "Ravi Kumar",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@sunmax.com",
        "website": "www.sunmax.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 26,
        "brandname": "V-Guard",
        "name": "V-Guard",
        "image": "vguard.png",
        "title": "Solar Water Heaters",
        "contactName": "Ravi Kumar",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@sunmax.com",
        "website": "www.sunmax.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 27,
        "brandname": "Venus",
        "name": "Venus",
        "image": "venus.png",
        "title": "Solar Water Heaters",
        "contactName": "Ravi Kumar",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@sunmax.com",
        "website": "www.sunmax.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      {
        "id": 28,
        "brandname": "Waaree",
        "name": "Waaree",
        "image": "waaree.png",
        "title": "Solar Water Heaters",
        "contactName": "Ravi Kumar",
        "mobile": "9876501234",
        "whatsapp": "9876501234",
        "landline": "011-33445522",
        "email": "contact@sunmax.com",
        "website": "www.sunmax.com",
        "address": "Delhi NCR",
        "dealing": "Solar Heaters, PV Modules"
      },
      
    
    // Add more brands as needed
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
