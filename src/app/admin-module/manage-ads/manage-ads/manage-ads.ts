import { Component, OnInit } from '@angular/core';
import { ManageAdsService } from '../../manage-ads/manage-ads.service';
import { BootstrapLoaderService } from '../../bootstrap-loader.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { RouterModule } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-manage-ads',
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-ads.html',
  styleUrl: './manage-ads.css'
})
export class ManageAds implements OnInit {
  currentUserRole: string = '';
  ads: any[] = [];
  selectedAd: any;
  deleteModal: any;
  constructor(
    private manageadsService: ManageAdsService,
    private bootstrapLoader: BootstrapLoaderService,
  ) { }

  ngOnInit(): void {
    this.getallads();
    this.bootstrapLoader.loadBootstrap();
  }

  getallads(): void {
    this.manageadsService.getallads().subscribe({
      next: (res) => {
        this.ads = res;
      },
      error: (err) => {
        alert('Failed to fetch ads!');
      }
    });
  }

  openDeleteModal(ad: any): void {
    this.selectedAd = ad;
    const modal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    modal.show();
  }

  confirmDelete(): void {
    this.manageadsService.deleteadsbyid(this.selectedAd.id).subscribe({
      next: () => {
        this.getallads();
        const modal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmModal'));
        modal.hide();
      },

      error: (err) => {
        alert('Failed to delete ad!');
      }
    });
  }


  getImageUrl(relativePath: string): string {
    //debugger
    //environment.apiUrl = environment.apiUrl.split("/")[0] + "//" + environment.apiUrl.split("/")[2];
    return `${environment.apiUrl}${relativePath}`;
  }
}
