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
  selector: 'app-cctv-camera-dome-bullet',
  imports: [CommonModule, FormsModule],
  templateUrl: './cctv-camera-dome-bullet.html',
  styleUrl: './cctv-camera-dome-bullet.css'
})
export class CctvCameraDomeBullet {
  showEnquiryForm = false;
  selectedBrand: Brand | null = null;
  
  // Sample brand data - replace with your actual data
  brands: Brand[] = [
    {
      id: 1,
      brandname: 'ACCU-VISION',
      name: 'Accu Vision Security Systems',
      image: 'accuvision.png',
      title: 'CCTV & Surveillance',
      contactName: 'Amit Sharma',
      mobile: '9811001001',
      whatsapp: '9811001001',
      landline: '01112340001',
      email: 'support@accuvision.com',
      website: 'www.accuvision.com',
      address: 'New Delhi, India',
      dealing: 'CCTV Cameras, DVRs, NVRs'
    },
    {
      id: 2,
      brandname: 'Active Pixel',
      name: 'Active Pixel Technologies',
      image: 'activepixel.png',
      title: 'CCTV & Security Systems',
      contactName: 'Rohit Mehra',
      mobile: '9811001002',
      whatsapp: '9811001002',
      landline: '01112340002',
      email: 'info@activepixel.in',
      website: 'www.activepixel.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'HD Cameras, IP Cameras'
    },
    {
      id: 3,
      brandname: 'Advik',
      name: 'Advik Electronics Pvt Ltd',
      image: 'advik.png',
      title: 'Surveillance Solutions',
      contactName: 'Sonal Gupta',
      mobile: '9811001003',
      whatsapp: '9811001003',
      landline: '01112340003',
      email: 'care@advik.in',
      website: 'www.advik.in',
      address: 'Pune, Maharashtra',
      dealing: 'CCTV, DVRs'
    },
    {
      id: 4,
      brandname: 'AVTECH',
      name: 'AVTECH Security Systems',
      image: 'avtech.png',
      title: 'CCTV Solutions',
      contactName: 'Deepak Nair',
      mobile: '9811001004',
      whatsapp: '9811001004',
      landline: '01112340004',
      email: 'support@avtech.com',
      website: 'www.avtech.com',
      address: 'Bangalore, Karnataka',
      dealing: 'IP Cameras, DVRs, Security Systems'
    },
    {
      id: 5,
      brandname: 'Avtron',
      name: 'Avtron Technologies',
      image: 'avtron.png',
      title: 'Surveillance & Security',
      contactName: 'Anjali Sinha',
      mobile: '9811001005',
      whatsapp: '9811001005',
      landline: '01112340005',
      email: 'sales@avtron.in',
      website: 'www.avtron.in',
      address: 'Chennai, Tamil Nadu',
      dealing: 'CCTV, Smart Surveillance'
    },
    {
      id: 6,
      brandname: 'Axis',
      name: 'Axis Communications',
      image: 'axis.png',
      title: 'Network Cameras',
      contactName: 'Rakesh Kumar',
      mobile: '9811001006',
      whatsapp: '9811001006',
      landline: '01112340006',
      email: 'contact@axis.com',
      website: 'www.axis.com',
      address: 'Gurgaon, Haryana',
      dealing: 'IP Cameras, Security Solutions'
    },
    {
      id: 7,
      brandname: 'Bosch',
      name: 'Bosch Security Systems',
      image: 'bosch.png',
      title: 'Surveillance Solutions',
      contactName: 'Neha Kapoor',
      mobile: '9811001007',
      whatsapp: '9811001007',
      landline: '01112340007',
      email: 'bosch@support.com',
      website: 'www.boschsecurity.com',
      address: 'Bangalore, Karnataka',
      dealing: 'CCTV, Security Equipment'
    },
    {
      id: 8,
      brandname: 'BPL',
      name: 'BPL Security Systems',
      image: 'bpl.png',
      title: 'Electronics & Surveillance',
      contactName: 'Pradeep Rao',
      mobile: '9811001008',
      whatsapp: '9811001008',
      landline: '01112340008',
      email: 'info@bplsecurity.in',
      website: 'www.bpl.in',
      address: 'Kerala, India',
      dealing: 'Home Security, CCTV'
    },
    {
      id: 9,
      brandname: 'Cheetah',
      name: 'Cheetah Security Systems',
      image: 'cheetah.png',
      title: 'CCTV Solutions',
      contactName: 'Vikas Sharma',
      mobile: '9811001009',
      whatsapp: '9811001009',
      landline: '01112340009',
      email: 'sales@cheetah.in',
      website: 'www.cheetah.in',
      address: 'Noida, UP',
      dealing: 'DVRs, CCTV Cameras'
    },
    {
      id: 10,
      brandname: 'CNB',
      name: 'CNB Technology',
      image: 'cnb.png',
      title: 'Security & Surveillance',
      contactName: 'Rajesh Patel',
      mobile: '9811001010',
      whatsapp: '9811001010',
      landline: '01112340010',
      email: 'contact@cnb.com',
      website: 'www.cnb.com',
      address: 'Kolkata, WB',
      dealing: 'CCTV, DVR Systems'
    },
    {
      id: 11,
      brandname: 'CP Plus',
      name: 'CP Plus India',
      image: 'cpplus.png',
      title: 'CCTV & Surveillance',
      contactName: 'Anand Verma',
      mobile: '9811001011',
      whatsapp: '9811001011',
      landline: '01112340011',
      email: 'support@cpplusworld.com',
      website: 'www.cpplusworld.com',
      address: 'New Delhi, India',
      dealing: 'CCTV, DVR, NVR, IP Cameras'
    },
    {
      id: 12,
      brandname: 'D-Link',
      name: 'D-Link India Ltd',
      image: 'dlink.png',
      title: 'Networking & Security',
      contactName: 'Meena Rathi',
      mobile: '9811001012',
      whatsapp: '9811001012',
      landline: '01112340012',
      email: 'info@dlink.co.in',
      website: 'www.dlink.co.in',
      address: 'Goa, India',
      dealing: 'CCTV, IP Cameras, Networking'
    },
    {
      id: 13,
      brandname: 'D3D',
      name: 'D3D Security Pvt Ltd',
      image: 'd3d.png',
      title: 'CCTV & Smart Security',
      contactName: 'Suresh Iyer',
      mobile: '9811001013',
      whatsapp: '9811001013',
      landline: '01112340013',
      email: 'care@d3dsecurity.com',
      website: 'www.d3dsecurity.com',
      address: 'Gurgaon, Haryana',
      dealing: 'WiFi CCTV, Smart Cameras'
    },
    {
      id: 14,
      brandname: 'Dahua',
      name: 'Dahua Technology',
      image: 'dahua.png',
      title: 'Surveillance Solutions',
      contactName: 'Arvind Kumar',
      mobile: '9811001014',
      whatsapp: '9811001014',
      landline: '01112340014',
      email: 'support@dahuasecurity.com',
      website: 'www.dahuasecurity.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, IP Cameras, DVR/NVR'
    },
    {
      id: 15,
      brandname: 'Ekvira',
      name: 'Ekvira Security Systems',
      image: 'ekvira.png',
      title: 'CCTV Solutions',
      contactName: 'Sneha Deshmukh',
      mobile: '9811001015',
      whatsapp: '9811001015',
      landline: '01112340015',
      email: 'info@ekvira.in',
      website: 'www.ekvira.in',
      address: 'Pune, Maharashtra',
      dealing: 'CCTV Cameras, DVRs'
    },
    {
      id: 16,
      brandname: 'Godrej',
      name: 'Godrej Security Solutions',
      image: 'godrej.png',
      title: 'Home & Business Security',
      contactName: 'Prakash Menon',
      mobile: '9811001016',
      whatsapp: '9811001016',
      landline: '01112340016',
      email: 'support@godrej.com',
      website: 'www.godrejsecure.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, Home Security'
    },
    {
      id: 17,
      brandname: 'HD Crystal',
      name: 'HD Crystal Systems',
      image: 'hdcrystal.png',
      title: 'CCTV & DVR',
      contactName: 'Ankita Jain',
      mobile: '9811001017',
      whatsapp: '9811001017',
      landline: '01112340017',
      email: 'contact@hdcrystal.in',
      website: 'www.hdcrystal.in',
      address: 'Delhi, India',
      dealing: 'CCTV, HD DVRs'
    },
    {
      id: 18,
      brandname: 'Hi-Focus',
      name: 'Hi-Focus Electronics',
      image: 'hifocus.png',
      title: 'CCTV & Security',
      contactName: 'Kiran Bhat',
      mobile: '9811001018',
      whatsapp: '9811001018',
      landline: '01112340018',
      email: 'sales@hifocus.in',
      website: 'www.hifocus.in',
      address: 'Hyderabad, Telangana',
      dealing: 'CCTV, NVRs'
    },
    {
      id: 19,
      brandname: 'Hikvision',
      name: 'Hikvision India',
      image: 'hikvision.png',
      title: 'Surveillance Systems',
      contactName: 'Rajat Singh',
      mobile: '9811001019',
      whatsapp: '9811001019',
      landline: '01112340019',
      email: 'support@hikvision.com',
      website: 'www.hikvisionindia.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, IP Cameras, DVR/NVR'
    },
    {
      id: 20,
      brandname: 'Hitech',
      name: 'Hitech Security Systems',
      image: 'hitech.png',
      title: 'CCTV & Security',
      contactName: 'Priya Yadav',
      mobile: '9811001020',
      whatsapp: '9811001020',
      landline: '01112340020',
      email: 'info@hitech.in',
      website: 'www.hitechsecurity.com',
      address: 'Chennai, Tamil Nadu',
      dealing: 'Security Cameras, DVRs'
    },
    {
      id: 21,
      brandname: 'Honeywell',
      name: 'Honeywell Security',
      image: 'honeywell.png',
      title: 'Security Solutions',
      contactName: 'Sanjay Gupta',
      mobile: '9811001021',
      whatsapp: '9811001021',
      landline: '01112340021',
      email: 'support@honeywell.com',
      website: 'www.honeywell.com',
      address: 'Bangalore, Karnataka',
      dealing: 'CCTV, Alarm Systems'
    },
    {
      id: 22,
      brandname: 'iBall',
      name: 'iBall Security Systems',
      image: 'iball.png',
      title: 'Electronics & CCTV',
      contactName: 'Nidhi Sharma',
      mobile: '9811001022',
      whatsapp: '9811001022',
      landline: '01112340022',
      email: 'info@iball.in',
      website: 'www.iball.in',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, Networking'
    },
    {
      id: 23,
      brandname: 'Matrix',
      name: 'Matrix Comsec',
      image: 'matrix.png',
      title: 'Security & Telecom',
      contactName: 'Anupam Khanna',
      mobile: '9811001023',
      whatsapp: '9811001023',
      landline: '01112340023',
      email: 'support@matrixcomsec.com',
      website: 'www.matrixcomsec.com',
      address: 'Vadodara, Gujarat',
      dealing: 'CCTV, Access Control'
    },
    {
      id: 24,
      brandname: 'Orbit',
      name: 'Orbit Electronics',
      image: 'orbit.png',
      title: 'CCTV Systems',
      contactName: 'Ramesh Joshi',
      mobile: '9811001024',
      whatsapp: '9811001024',
      landline: '01112340024',
      email: 'info@orbit.in',
      website: 'www.orbit.in',
      address: 'Delhi, India',
      dealing: 'CCTV Cameras, DVRs'
    },
    {
      id: 25,
      brandname: 'Panasonic',
      name: 'Panasonic Security',
      image: 'panasonic.png',
      title: 'Electronics & Security',
      contactName: 'Aarti Mehra',
      mobile: '9811001025',
      whatsapp: '9811001025',
      landline: '01112340025',
      email: 'support@panasonic.in',
      website: 'www.panasonic.com',
      address: 'Mumbai, Maharashtra',
      dealing: 'CCTV, Smart Solutions'
    },
    {
      id: 26,
      brandname: 'Pelco',
      name: 'Pelco Security',
      image: 'pelco.png',
      title: 'Surveillance Solutions',
      contactName: 'Kunal Desai',
      mobile: '9811001026',
      whatsapp: '9811001026',
      landline: '01112340026',
      email: 'sales@pelco.com',
      website: 'www.pelco.com',
      address: 'Delhi, India',
      dealing: 'CCTV, IP Cameras'
    },
    {
      id: 27,
      brandname: 'Samsung',
      name: 'Samsung Security',
      image: 'samsung.png',
      title: 'Electronics & Security',
      contactName: 'Rohini Nair',
      mobile: '9811001027',
      whatsapp: '9811001027',
      landline: '01112340027',
      email: 'support@samsung.com',
      website: 'www.samsung.com',
      address: 'Delhi, India',
      dealing: 'CCTV, IP Cameras, DVRs'
    },
    {
      id: 28,
      brandname: 'Secureye',
      name: 'Secureye India',
      image: 'secureye.png',
      title: 'Security & CCTV',
      contactName: 'Vivek Taneja',
      mobile: '9811001028',
      whatsapp: '9811001028',
      landline: '01112340028',
      email: 'support@secureye.com',
      website: 'www.secureye.com',
      address: 'Gurgaon, Haryana',
      dealing: 'CCTV, Security Products'
    },
    {
      id: 29,
      brandname: 'Securus',
      name: 'Securus Systems',
      image: 'securus.png',
      title: 'CCTV Solutions',
      contactName: 'Ritika Ghosh',
      mobile: '9811001029',
      whatsapp: '9811001029',
      landline: '01112340029',
      email: 'info@securus.in',
      website: 'www.securus.in',
      address: 'Kolkata, WB',
      dealing: 'CCTV, Security Systems'
    },
    {
      id: 30,
      brandname: 'SECURA',
      name: 'Secura Technologies',
      image: 'secura.png',
      title: 'Security Products',
      contactName: 'Ajay Malhotra',
      mobile: '9811001030',
      whatsapp: '9811001030',
      landline: '01112340030',
      email: 'sales@secura.in',
      website: 'www.secura.in',
      address: 'Delhi, India',
      dealing: 'CCTV, Smart Security'
    },
    {
      id: 31,
      brandname: 'Sony',
      name: 'Sony Security Systems',
      image: 'sony.png',
      title: 'Electronics & CCTV',
      contactName: 'Divya Rao',
      mobile: '9811001031',
      whatsapp: '9811001031',
      landline: '01112340031',
      email: 'support@sony.com',
      website: 'www.sony.com',
      address: 'Mumbai, India',
      dealing: 'CCTV, Smart Surveillance'
    },
    {
      id: 32,
      brandname: 'Sparsh',
      name: 'Sparsh CCTV',
      image: 'sparsh.png',
      title: 'CCTV & DVR',
      contactName: 'Harish Kumar',
      mobile: '9811001032',
      whatsapp: '9811001032',
      landline: '01112340032',
      email: 'support@sparshcctv.com',
      website: 'www.sparshcctv.com',
      address: 'Delhi, India',
      dealing: 'CCTV, DVRs'
    },
    {
      id: 33,
      brandname: 'Sricam',
      name: 'Sricam India',
      image: 'sricam.png',
      title: 'WiFi CCTV Cameras',
      contactName: 'Sakshi Jain',
      mobile: '9811001033',
      whatsapp: '9811001033',
      landline: '01112340033',
      email: 'support@sricam.com',
      website: 'www.sricam.com',
      address: 'Delhi, India',
      dealing: 'IP & WiFi CCTV'
    },
    {
      id: 34,
      brandname: 'Surya',
      name: 'Surya Security',
      image: 'surya.png',
      title: 'Security & CCTV',
      contactName: 'Nitin Kapoor',
      mobile: '9811001034',
      whatsapp: '9811001034',
      landline: '01112340034',
      email: 'info@suryasecurity.com',
      website: 'www.suryasecurity.com',
      address: 'Delhi, India',
      dealing: 'CCTV, DVRs'
    },
    {
      id: 35,
      brandname: 'Trueview',
      name: 'Trueview Security',
      image: 'trueview.png',
      title: 'CCTV & Surveillance',
      contactName: 'Pooja Agarwal',
      mobile: '9811001035',
      whatsapp: '9811001035',
      landline: '01112340035',
      email: 'support@trueview.in',
      website: 'www.trueview.in',
      address: 'Delhi, India',
      dealing: 'CCTV, DVR, NVR'
    },
    {
      id: 36,
      brandname: 'Unitech',
      name: 'Unitech Security',
      image: 'unitech.png',
      title: 'CCTV Systems',
      contactName: 'Ashok Sharma',
      mobile: '9811001036',
      whatsapp: '9811001036',
      landline: '01112340036',
      email: 'info@unitech.in',
      website: 'www.unitech.in',
      address: 'Delhi, India',
      dealing: 'CCTV, DVRs'
    },
    {
      id: 37,
      brandname: 'Unv',
      name: 'Uniview Technologies',
      image: 'unv.png',
      title: 'IP CCTV Solutions',
      contactName: 'Rekha Singh',
      mobile: '9811001037',
      whatsapp: '9811001037',
      landline: '01112340037',
      email: 'support@uniview.com',
      website: 'www.uniview.com',
      address: 'Delhi, India',
      dealing: 'IP CCTV, DVR/NVR'
    },
    {
      id: 38,
      brandname: 'Vantage',
      name: 'Vantage Security',
      image: 'vantage.png',
      title: 'CCTV Systems',
      contactName: 'Ravi Shetty',
      mobile: '9811001038',
      whatsapp: '9811001038',
      landline: '01112340038',
      email: 'sales@vantage.in',
      website: 'www.vantage.in',
      address: 'Delhi, India',
      dealing: 'CCTV, DVRs'
    },
    {
      id: 39,
      brandname: 'Videocon',
      name: 'Videocon Security',
      image: 'videocon.png',
      title: 'Electronics & CCTV',
      contactName: 'Sonia Kapoor',
      mobile: '9811001039',
      whatsapp: '9811001039',
      landline: '01112340039',
      email: 'support@videocon.com',
      website: 'www.videocon.com',
      address: 'Mumbai, India',
      dealing: 'CCTV, Home Security'
    },
    {
      id: 40,
      brandname: 'Vintron',
      name: 'Vintron Security',
      image: 'vintron.png',
      title: 'CCTV Systems',
      contactName: 'Vikram Yadav',
      mobile: '9811001040',
      whatsapp: '9811001040',
      landline: '01112340040',
      email: 'sales@vintron.in',
      website: 'www.vintron.in',
      address: 'Delhi, India',
      dealing: 'CCTV, DVRs'
    },
    {
      id: 41,
      brandname: 'Vivotek',
      name: 'Vivotek Inc',
      image: 'vivotek.png',
      title: 'IP CCTV Solutions',
      contactName: 'Rahul Mehta',
      mobile: '9811001041',
      whatsapp: '9811001041',
      landline: '01112340041',
      email: 'support@vivotek.com',
      website: 'www.vivotek.com',
      address: 'Delhi, India',
      dealing: 'IP CCTV, NVR'
    },
    {
      id: 42,
      brandname: 'YI',
      name: 'YI Technology',
      image: 'yi.png',
      title: 'Smart Cameras',
      contactName: 'Ananya Verma',
      mobile: '9811001042',
      whatsapp: '9811001042',
      landline: '01112340042',
      email: 'support@yitechnology.com',
      website: 'www.yitechnology.com',
      address: 'Delhi, India',
      dealing: 'Smart WiFi Cameras'
    },
    {
      id: 43,
      brandname: 'Zebronics',
      name: 'Zebronics India',
      image: 'zebronics.png',
      title: 'Electronics & Security',
      contactName: 'Sahil Arora',
      mobile: '9811001043',
      whatsapp: '9811001043',
      landline: '01112340043',
      email: 'support@zebronics.com',
      website: 'www.zebronics.com',
      address: 'Chennai, India',
      dealing: 'CCTV, Smart Devices'
    },
    {
      id: 44,
      brandname: 'Zicom',
      name: 'Zicom Security Systems',
      image: 'zicom.png',
      title: 'CCTV & Security Solutions',
      contactName: 'Manish Bhatia',
      mobile: '9811001044',
      whatsapp: '9811001044',
      landline: '01112340044',
      email: 'support@zicom.com',
      website: 'www.zicom.com',
      address: 'Mumbai, India',
      dealing: 'CCTV, Security Systems'
    }        
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
