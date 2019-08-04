import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let router: Router;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeaderComponent ],
            imports: [ BrowserAnimationsModule, FormsModule, RouterTestingModule, MatIconModule, MatInputModule, MatToolbarModule ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        router = fixture.debugElement.injector.get(Router);
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    describe('goHome', () => {
        it('should take the user back to the application root => /', () => {
            spyOn(router, 'navigate');
            
            component.goHome();
            
            expect(router.navigate).toHaveBeenCalledWith([ '/' ]);
        });
    });
    
    describe('searchForUser', () => {
        it('should not navigate the user if they did not put in a username', () => {
            spyOn(router, 'navigate');
            
            component.searchForUser();
            
            expect(router.navigate).not.toHaveBeenCalled();
        });
        
        it('should not navigate the user if they only put in whitespace for a username', () => {
            spyOn(router, 'navigate');
            
            component.searchUsername = '     ';
            component.searchForUser();
            
            expect(router.navigate).not.toHaveBeenCalled();
        });
        
        it('should navigate the user if they put in a username', () => {
            spyOn(router, 'navigate');
            
            component.searchUsername = 'Solid Snake';
            component.searchForUser();
            
            expect(router.navigate).toHaveBeenCalledWith([ '/', 'Solid Snake' ]);
            expect(component.searchUsername).toEqual('');
        });
    });
});
