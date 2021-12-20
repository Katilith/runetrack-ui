import { Component, HostListener, OnInit } from '@angular/core';
import { MobileService } from './layout/mobile/mobile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IosInstallComponent } from './layout/ios-install/ios-install.component';

@Component({
    selector: 'rune-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
    
    public constructor(private mobileService: MobileService, private snackBar: MatSnackBar) {
        this.mobileService.screenWidth = window.innerWidth;
    }
    
    public ngOnInit(): void {
        if(this.shouldShowIosAppNotif()) {
            this.openIosAppNotif();
        }
    }
    
    private openIosAppNotif(): void {
        this.snackBar.openFromComponent(IosInstallComponent, {
            duration: 15000,
            horizontalPosition: 'start',
            panelClass: [ 'mat-elevation-z3' ]
        }).afterDismissed().subscribe(() => localStorage.setItem('iosAppInstallNotif', 'true'));
    }
    
    private shouldShowIosAppNotif(): boolean {
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        };
        
        const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
        
        if(isIos() && !isInStandaloneMode()) {
            const previouslySeenNotif = localStorage.getItem('iosAppInstallNotif');
            
            if(!previouslySeenNotif) {
                return true;
            }
        }
        
        return false;
    }
    
    @HostListener('window:resize', [ '$event' ])
    public onResize(event): void {
        this.mobileService.screenWidth = event.target.innerWidth;
    }
    
}
