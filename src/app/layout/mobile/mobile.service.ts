import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MobileService {
    
    public screenWidth: number = 0;
    
    public get isMobileSize(): boolean {
        return this.screenWidth < 769;
    }
    
}
