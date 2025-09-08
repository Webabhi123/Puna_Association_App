import { AfterViewInit, Component, Renderer2, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ManageAdsService } from '../admin-module/manage-ads/manage-ads.service';
import { environment } from '../../environments/environment';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit,AfterViewInit {
  adsBySlot: any[] = Array(24).fill(null);
  extraAds: any[] = [];


  constructor(private adsService: ManageAdsService,private renderer: Renderer2) {}
  zoomedImageUrl: string | null = null;

  openZoom(imageUrl: string) {
    this.zoomedImageUrl = imageUrl;
  }

  closeZoom() {
    this.zoomedImageUrl = null;
  }

  ngOnInit() {
    this.adsService.getallads().subscribe((ads: any[]) => {
      // Map ads to their slot number (1-based), and collect extra ads
      ads.forEach(ad => {
        if (ad.slotNumber && ad.slotNumber >= 1 && ad.slotNumber <= 24) {
          this.adsBySlot[ad.slotNumber - 1] = ad;
        } else {
          this.extraAds.push(ad);
        }
      });
    });
  }

  getImageUrl(relativePath: string): string {
    return relativePath ? `${environment.apiUrl}${relativePath}` : '';
  }
  ngAfterViewInit(): void {
    
  }
}
