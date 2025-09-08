import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
interface RailwayTransport {
  from: string;
  to: string;
  transportName: string;
  contactNo: string;
  address: string;
  emailId: string;
  website: string;
}
@Component({
  selector: 'app-railway-transport-data',
  imports: [CommonModule,FormsModule],
  templateUrl: './railway-transport-data.html',
  styleUrl: './railway-transport-data.css'
})
export class RailwayTransportData {
  @ViewChild('fileInput') fileInput!: ElementRef;
  tableData:  RailwayTransport[] = [];
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
  get filteredData(): RailwayTransport[] {
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
    this.http.get<RailwayTransport[]>(`${environment.apiUrl}/api/RailwayTransport/get-all`).subscribe({
      next: (data) => {
        this.tableData = data; // Update tableData instead of dataTable
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.tableData = []; // Clear table data on error
      }
    });
  }

  onFileChange(event: any): void {
    const file = event?.target?.files?.[0];
    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
  
    this.http.post<RailwayTransportData[]>(`${environment.apiUrl}/api/RailwayTransport/upload-railwaytransport`, formData).subscribe({
      next: (data) => {
        // After successful upload, refresh the data
        this.initializeDataTable();
        // Clear the file input
        if (this.fileInput) {
          this.fileInput.nativeElement.value = '';
        }
        alert('File uploaded successfully!');
      },
      error: (error) => {
        console.error('Error uploading file:', error);
        alert('Error uploading file. Please try again.');
        // Clear the file input on error too
        if (this.fileInput) {
          this.fileInput.nativeElement.value = '';
        }
      }
    });
  }

  // Optional: Add a method to clear all data
  clearData(): void {
    if (confirm('Are you sure you want to clear all data from the database?')) {
      this.http.delete(`${environment.apiUrl}/api/RailwayTransport/delete-all`).subscribe({
        next: () => {
          this.tableData = [];
          //localStorage.removeItem('transportTableData');
          alert('All transport data deleted successfully.');
        },
        error: (err) => {
          console.error('Failed to delete data:', err);
          alert('Failed to delete data.');
        }
      });
    }
  }
  
}
