import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapCacheService {

  private cacheKey = 'mapDetails';

  constructor() { }

  getMapDetails(): string | null {
    const cachedData = sessionStorage.getItem(this.cacheKey);
    try {
      return cachedData ? JSON.parse(cachedData) : null;
    } catch {
      return null;
    }
  }

  setMapDetails(data: any): void {
    sessionStorage.setItem(this.cacheKey, JSON.stringify(data));
  }

  clearMapDetails(): void {
    sessionStorage.removeItem(this.cacheKey);
  }
}
