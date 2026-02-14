import { MapCacheService } from '../../services/map-cache-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-maps',
  standalone: true,
    imports: [CommonModule],
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;

  constructor(private mapCacheService: MapCacheService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadMapUrl();
    })
  }

  loadMapUrl(): void {
    const cachedUrl = this.mapCacheService.getMapDetails();

    if (cachedUrl) {
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cachedUrl);
    } else {
      // The URL you want to cache and use
      const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.29837583691!2d75.77583485!3d11.25928825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1721591143896!5m2!1sen!2sin';

      this.mapCacheService.setMapDetails(url);
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}

