import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Category {
  name: string;
  route: string;
}
@Component({
  selector: 'app-header',
  imports: [CommonModule,FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  searchQuery = '';
  showSuggestions = false;
  categories: Category[] = [
      {name:'Product Category',route:'product-category'},
      {name:'Automation',route:'subcategory-automation'},
      {name:'Wires & Cables',route:'subcategory-wires-cables'},
      {name:'Lighting & Fancy Fitting',route:'subcategory-lighting-fancy-fitting'},
      {name:'Electronics',route:'subcategory-electronics'},
      {name:'Blowers, Fan & Coolers',route:'subcategory-blowers-fan-coolers'},
      {name:'Motors & Pumps',route:'subcategory-motors-pumps'},
      {name:'Test & Measuring Instruments',route:'subcategory-test-measuring-instruments'},
      {name:'Household',route:'subcategory-household'},
      {name:'Switchgear',route:'subcategory-switchgear'},
      {name:'HouseHold',route:'subcategory-household'},
      {name:'Heaters',route:'subcategory-heaters'},
      {name:'Appliances & Consumer Electronic',route:'subcategory-appliances-consumer-electronic'},
      {name:'Stepper Motor',route:'stepper-motor'},
      {name:'Soft Starters',route:'soft-starters'},
      {name:'Transmitter Device',route:'transmitter-device'},
      {name:'Switch Mode Power Supply',route:'switch-mode-power-supply'},
      {name:'Proximity Switches',route:'proximity-switches'},
      {name:'House Wire',route:'house-wire'},
      {name:'Flexible Cable',route:'flexible-cable'},
      {name:'Armoured Cable',route:'armoured-cable'},
      {name:'Distance Meter',route:'distance-meter'},
      {name:'Moisture Meter',route:'moisture-meter'},
      {name:'Fuse Links Base Holders',route:'fuse-links-base-holders'},
      {name:'MCCB',route:'mccb'},
      {name:'MPCB',route:'mpcb'},
      {name:'Motor Starters',route:'motor-starters'},
      {name:'RCBO',route:'rcbo'},
      {name:'Rotary Switch',route:'rotary-switch'},
      {name:'Semiconductor Fuses',route:'semiconductor-fuses'},
      {name:'Changeover Transfer Switches',route:'changeover-transfer-switches'},
      {name:'Contactors',route:'contactors'},
      {name:'Limit Switches',route:'limit-switches'},
      {name:'Room Heaters',route:'room-heaters'},
      {name:'Vertical Pumps',route:'vertical-pump'},
      {name:'Water Pumps',route:'water-pumps'},
      {name:'Well Pumps',route:'well-pump'},
      {name:'Upvc Pipes & Fittings',route:'upvc-pipes-fittings'},
      {name:'Impellers',route:'impellers'},
      {name:'Monoblock Pumps',route:'monoblock-pumps'},
      {name:'Oil Pumps',route:'oil-pump'},
      {name:'Pressure Pumps',route:'pressure-pumps'},
      {name:'Pneumatic',route:'pneumatic'},
      {name:'Pneumatic Pumps',route:'pneumatic-pumps'},
      {name:'Piston Pumps',route:'piston-pumps'},
      {name:'PMDC Motor',route:'pmdc-motor'},
      {name:'Rotary Pumps',route:'rotary-pumps'},
      {name:'Sewage Submersible Pumps',route:'sewage-submersible-pumps'},
      {name:'Submersible Pumps',route:'submersible-pumps'},
      {name:'Self Priming Pumps',route:'self-priming-pumps'},
      {name:'Screw Pumps',route:'screw-pumps'},
      {name:'Synchronous Motors',route:'synchronous-motors'},
      {name:'Servo Motor',route:'servo-motor'},
      {name:'Vaccum Pumps',route:'vaccum-pumps'},
      {name:'Vertical Pumps',route:'vertical-pump'},
      {name:'Gas Generators',route:'gas-generators'},
      {name:'Alternator Parts',route:'alternator-parts'},
      {name:'Bldc Fans',route:'bldc-fans'},
      {name:'Ceiling Fans',route:'ceiling-fans'},
      {name:'Decorative Ceiling Fans',route:'decorative-ceiling-fans'},
      {name:'Exhaust Fans',route:'exhaust-fans'},
      {name:'Mist Fans',route:'mist-fans'},
      {name:'Ring Main Unit',route:'ring-main-unit'},
      {name:'Diesel Generator',route:'diesel-generator'},
      {name:'Petrol Generator',route:'petrol-generator'},
      {name:'CCTV Camera Cables Wires',route:'cctv-camera-cables-wires'},
      {name:'CCTV Camera Accessories',route:'cctv-camera-accessories'},
      {name:'CCTV Camera Parts Lenses',route:'cctv-camera-parts-lenses'},
      {name:'CCTV Camera Dome Bullet',route:'cctv-camera-dome-bullet'},
      {name:'DVR',route:'dvr'},
      {name:'Fisheye Camera',route:'fisheye-camera'},
      {name:'Thermal Camera',route:'thermal-camera'},
      {name:'Infrared Night Vision Camera',route:'infrared-night-vision-camera'},
      {name:'IP Camera',route:'ip-camera'},
      {name:'Surveillance Systems',route:'surveillance-systems'},
      {name:'Wifi Camera',route:'wifi-camera'},
      {name:'Circular Connectors',route:'circular-connectors'},
      {name:'EPABX System',route:'epabx-system'},
      {name:'CCTV Camera Cables Wires',route:'cctv-camera-cables-wires'}
  ];
  filteredCategories: Category[] = [];

  constructor(private router: Router) {}

  onSearchInput() {
    if (this.searchQuery.length > 0) {
      this.filteredCategories = this.categories.filter(cat =>
        cat.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.showSuggestions = this.filteredCategories.length > 0;
    } else {
      this.showSuggestions = false;
    }
  }

  selectCategory(category: any) {
    this.router.navigate([category.route]);
    this.showSuggestions = false;
    this.searchQuery = '';
  }
}
