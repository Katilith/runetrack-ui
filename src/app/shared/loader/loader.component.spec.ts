import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;
    
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ LoaderComponent ],
            imports: [ MatProgressSpinnerModule ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    describe('className', () => {
        it('should return the correct default', () => {
            expect(component.className).toEqual('rune-large rune-overlay');
        });
        
        it('should return the correct name for the type SMALL', () => {
            component.type = 'SMALL';
            expect(component.className).toEqual('rune-small rune-overlay');
        });
        
        it('should add the proper class name if overlay is set to false', () => {
            component.type = 'SMALL';
            component.overlay = false;
            expect(component.className).toEqual('rune-small');
        });
    });
});
