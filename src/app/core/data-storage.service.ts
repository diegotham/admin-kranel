import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
    constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }

  set(key: string, data: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }

  get(key: string): any {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return null;
    }
  }

  remove(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }
}
