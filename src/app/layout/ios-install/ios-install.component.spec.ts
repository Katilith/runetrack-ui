import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosInstallComponent } from './ios-install.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarRef } from '@angular/material/snack-bar';

describe('IosInstallComponent', () => {
    let component: IosInstallComponent;
    let fixture: ComponentFixture<IosInstallComponent>;
    let snackBarRef: MatSnackBarRef<IosInstallComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ IosInstallComponent ],
            imports: [ MatIconModule, MatButtonModule ],
            providers: [
                {
                    provide: MatSnackBarRef,
                    useValue: {
                        dismiss: () => {
                        }
                    }
                }
            ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(IosInstallComponent);
        component = fixture.componentInstance;
        snackBarRef = fixture.debugElement.injector.get(MatSnackBarRef) as MatSnackBarRef<IosInstallComponent>;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should dismiss the notification when the close button is hit', () => {
        spyOn(snackBarRef, 'dismiss');
        
        component.close();
        
        expect(snackBarRef.dismiss).toHaveBeenCalled();
    });
});
