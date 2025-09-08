import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
declare var $: any;

interface TransportData {
  from: string;
  to: string;
  transportName: string;
  contactNo: string;
  address: string;
  emailId: string;
  website: string;
}

@Component({
  selector: 'app-transport',
  imports: [CommonModule,FormsModule],
  templateUrl: './transport.html',
  styleUrl: './transport.css'
})
export class Transport implements AfterViewInit {
  tableData: TransportData[] = [];
  dataTable: any;
  search: any = {
    from: '',
    to: '',
    transportName: '',
    contactNo: '',
    address: '',
    emailId: '',
    website: ''
  };

  constructor(private http: HttpClient) {
    // Load saved data from localStorage on component init
    const savedData =this.initializeDataTable();
    if (savedData !== undefined) {
      this.tableData = JSON.parse(savedData);
    }
  }
  get filteredData(): TransportData[] {
    return this.tableData.filter(row =>
      (this.search.from === '' || row.from?.toLowerCase().includes(this.search.from.toLowerCase())) &&
      (this.search.to === '' || row.to?.toLowerCase().includes(this.search.to.toLowerCase())) &&
      (this.search.transportName === '' || row.transportName?.toLowerCase().includes(this.search.transportName.toLowerCase())) &&
      (this.search.contactNo === '' || row.contactNo?.toLowerCase().includes(this.search.contactNo.toLowerCase())) &&
      (this.search.address === '' || row.address?.toLowerCase().includes(this.search.address.toLowerCase())) &&
      (this.search.emailId === '' || row.emailId?.toLowerCase().includes(this.search.emailId.toLowerCase())) &&
      (this.search.website === '' || row.website?.toLowerCase().includes(this.search.website.toLowerCase()))
    );
  }

  ngAfterViewInit(): void {
    this.initializeDataTable();
  }

  private initializeDataTable(): void {
      this.http.get<TransportData[]>(`${environment.apiUrl}/api/Excel/get-all`).subscribe({
        next: (data) => {
          this.tableData = data; // Update tableData instead of dataTable
        },
        error: (error) => {
          console.error('Error fetching data:', error);
          this.tableData = []; // Clear table data on error
        }
      });
    }

  
}
