import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ManageAdsService } from '../manage-ads.service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-create-ads',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-ads.html',
  styleUrl: './create-ads.css'
})
export class CreateAds implements OnInit {
  selectedFile: File | null = null;
  slotNumber: number = 0;
  adId: number | null = null;
  imageUrl: string | null = null;
  constructor(private adsService: ManageAdsService, private router:Router,private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.adId = +id;
        this.adsService.getadsbyid(this.adId).subscribe(ad => {
          this.slotNumber = ad.slotNumber;
          this.imageUrl = ad.imageUrl; // for preview
        });
      }
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  getImageUrl(relativePath: string): string {
      return `${environment.apiUrl}${relativePath}`;
    }
  onSubmit() {
    const formData = new FormData();
    formData.append('slotNumber', this.slotNumber.toString());
    if (this.selectedFile) {
      // formData.append('Image', this.selectedFile);
       formData.append('ImageUrl', this.selectedFile); // Use DTO property name
    }

    if (this.adId) {
      // Update mode
      this.adsService.updateadsbyid(this.adId, formData).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/admin/ads']);
        },
        error => console.log(error)
      );
    } else {
      // Create mode
      if (this.selectedFile) {
        //debugger;
        this.adsService.uploadads(formData).subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/admin/ads']);
          },
          error => console.log(error)
        );
      }
    }
  }
}

