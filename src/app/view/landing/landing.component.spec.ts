import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { LandingModule } from './landing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LandingComponent', () => {
    let component: LandingComponent;
    let fixture: ComponentFixture<LandingComponent>;
    
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ BrowserAnimationsModule, LandingModule, RouterTestingModule, HttpClientTestingModule ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
