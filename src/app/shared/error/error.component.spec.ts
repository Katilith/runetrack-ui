import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { ErrorModule } from './error.module';

describe('ErrorComponent', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ErrorModule
            ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
    it('should return an iconSize that is 4 pixels greater than the supplied fontSize', () => {
        component.fontSize = 16;
        
        expect(component.iconSize).toEqual('20px');
    });
    
    describe('styles', () => {
        it('should return a base styles object with no add-ons', () => {
            const expected = {
                fontSize: '16px',
                lineHeight: '20px',
                padding: '24px',
                color: '#ef5350'
            };
            
            expect(component.styles).toEqual(expected);
        });
        
        it('should set the correct color if level is set to warn', () => {
            component.level = 'warn';
            expect(component.styles[ 'color' ]).toEqual('#FFC107');
        });
        
        it('should set the correct color if level is set to info', () => {
            component.level = 'info';
            expect(component.styles[ 'color' ]).toEqual('#64b5f6');
        });
        
        it('should set justifyContent to center if center is set to true', () => {
            const expected = {
                fontSize: '16px',
                lineHeight: '20px',
                padding: '24px',
                color: '#ef5350',
                justifyContent: 'center'
            };
            
            component.center = true;
            
            expect(component.styles).toEqual(expected);
        });
        
        it('should add a marginTop style if marginTop is supplied', () => {
            const expected = {
                fontSize: '16px',
                lineHeight: '20px',
                padding: '24px',
                color: '#ef5350',
                marginTop: '16px'
            };
            
            component.marginTop = 16;
            
            expect(component.styles).toEqual(expected);
        });
        
        it('should handle all optional values with level set to info', () => {
            const expected = {
                fontSize: '12px',
                lineHeight: '16px',
                padding: '16px',
                color: '#64b5f6',
                justifyContent: 'center',
                marginTop: '16px'
            };
            
            component.fontSize = 12;
            component.padding = 16;
            component.center = true;
            component.marginTop = 16;
            component.level = 'info';
            
            expect(component.styles).toEqual(expected);
        });
    });
});
