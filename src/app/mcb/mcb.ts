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
  selector: 'app-mcb',
  imports: [CommonModule,FormsModule],
  templateUrl: './mcb.html',
  styleUrl: './mcb.css'
})
export class Mcb {
  showEnquiryForm = false;
    selectedBrand: Brand | null = null;
    
    // Sample brand data - replace with your actual data
    brands: Brand[] = [
      { id: 1, brandname: 'ABB', name: 'ABB', image: 'assets/brands-logo/abb-logo.png', title: 'ABB', contactName: '996633222', mobile: '', whatsapp: '', landline: '', email: 'john@gmail.com', website: 'www.abb.com', address: '22', dealing: 'ABB Management' },
      { id: 2, brandname: 'Anchor', name: 'Anchor', image: 'assets/brands-logo/anchor-logo.png', title: 'Anchor', contactName: '  996633222', mobile: '', whatsapp: '', landline: '', email: 'john@gmail.com', website: 'www.anchor.com', address: '22', dealing: 'Anchor Management' },
      { id: 3, brandname: 'Benlo', name: 'Benlo', image: 'assets/brands-logo/benlo-logo.png', title: 'Benlo', contactName: '996633222', mobile: '', whatsapp: '', landline: '', email: 'john@gmail.com', website: 'www.benlo.com', address: '22', dealing: 'Benlo Management' },
      { id: 4, brandname: 'C&S', name: 'C&S', image: 'assets/brands-logo/cs-logo.png', title: 'C&S', contactName: '996633222', mobile: '', whatsapp: '', landline: '', email: 'john@gmail.com', website: 'www.cs.com', address: '22', dealing: 'C&S Management' },
      { id: 5, brandname: 'Chint', name: 'Chint', image: 'assets/brands-logo/chint-logo.png', title: 'Chint', contactName: '996633222', mobile: '', whatsapp: '', landline: '9663255852', email: 'john@gmail.com', website: 'www.chint.com', address: '22', dealing: 'Chint Management' },
      { id: 6, brandname: 'Cona', name: 'Cona', image: 'assets/brands-logo/cona-logo.png', title: 'Cona', contactName: '996633222', mobile: '', whatsapp: '9663255852', landline: '9663255852', email: 'john@gmail.com', website: 'www.cona.com', address: '22', dealing: 'Cona Management' },
      { id: 7, brandname: 'Eaton', name: 'Eaton', image: 'assets/brands-logo/eaton-logo.png', title: 'Eaton', contactName: '996633222', mobile: '', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.eaton.com', address: '22', dealing: 'Eaton Management' },
      { id: 8, brandname: 'Finolex', name: 'Finolex', image: 'assets/brands-logo/finolex-logo.png', title: 'Finolex', contactName: '9663255852', mobile: '9663255852', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.finolex.com', address: '22', dealing: 'Finolex Management' },
      { id: 9, brandname: 'Hager', name: 'Hager', image: 'assets/brands-logo/hager-logo.png', title: 'Hager', contactName: '996633222', mobile: '', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.hager.com', address: '22', dealing: 'Hager Management' },
      { id: 10, brandname: 'Havells', name: 'Havells', image: 'assets/brands-logo/havells-logo.png', title: 'Havells', contactName: '996633222', mobile: '9663255852', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.havells.com', address: '22', dealing: 'Havells Management' },
      { id: 11, brandname: 'Honeywell', name: 'Honeywell', image: 'assets/brands-logo/honeywell-logo.png', title: 'Honeywell', contactName: '996633222', mobile: '9663255852', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.honeywell.com', address: '22', dealing: 'Honeywell Management' },
      { id: 12, brandname: 'HPL', name: 'HPL', image: 'assets/brands-logo/hpl-logo.png', title: 'HPL', contactName: '996633222', mobile: '9663255852', whatsapp: '9663255852', landline: '9632587410', email: 'john@gmail.com', website: 'www.hpl.com', address: '22', dealing: 'HPL Management' },
      { id: 13, brandname: 'Indoasian', name: 'Indoasian', image: 'assets/brands-logo/indoasian-logo.png', title: 'Indoasian', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.indoasian.com', address: '22', dealing: 'Indoasian Management' },
      { id: 14, brandname: 'Lauritz Knudsen', name: 'Lauritz Knudsen', image: 'assets/brands-logo/lauritzknudsen-logo.png', title: 'Lauritz Knudsen', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.lauritzknudsen.com', address: '22', dealing: 'Lauritz Knudsen Management' },
      { id: 15, brandname: 'Legrand', name: 'Legrand', image: 'assets/brands-logo/legrand-logo.png', title: 'Legrand', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.legrand.com', address: '22', dealing: 'Legrand Management' },
      { id: 16, brandname: 'Orient', name: 'Orient', image: 'assets/brands-logo/orient-logo.png', title: 'Orient', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.orient.com', address: '22', dealing: 'Orient Management' },
      { id: 17, brandname: 'Polycab', name: 'Polycab', image: 'assets/brands-logo/polycab-logo.png', title: 'Polycab', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.polycab.com', address: '22', dealing: 'Polycab Management' },
      { id: 18, brandname: 'Schneider', name: 'Schneider', image: 'assets/brands-logo/schneider-logo.png', title: 'Schneider', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.schneider.com', address: '22', dealing: 'Schneider Management' },
      { id: 19, brandname: 'Siemens', name: 'Siemens', image: 'assets/brands-logo/siemens-logo.png', title: 'Siemens', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.siemens.com', address: '22', dealing: 'Siemens Management' },
      { id: 20, brandname: 'Standard', name: 'Standard', image: 'assets/brands-logo/standard-logo.png', title: 'Standard', contactName: '996633222', mobile: '9632587410', whatsapp: '9663255852', landline: '', email: 'john@gmail.com', website: 'www.standard.com', address: '22', dealing: 'Standard Management' },
      { id: 21, brandname: 'V-Guard', name: 'V-Guard', image: 'assets/brands-logo/vguard-logo.png', title: 'V-Guard', contactName: '996633222', mobile: '85214796320', whatsapp: '85214796320', landline: '', email: 'john@gmail.com', website: 'www.vguard.com', address: '22', dealing: 'V-Guard Management' }
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
