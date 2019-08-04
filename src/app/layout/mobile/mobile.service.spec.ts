import { TestBed } from '@angular/core/testing';

import { MobileService } from './mobile.service';

describe('MobileService', () => {
    let service: MobileService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.get(MobileService);
    });
    
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    
    describe('isMobileSize', () => {
        it('should return true if the current screen width is less than 769', () => {
            service.screenWidth = 768;
            
            expect(service.isMobileSize).toBeTruthy();
        });
        
        it('should return false if the current screen width is equal to 769', () => {
            service.screenWidth = 769;
            
            expect(service.isMobileSize).toBeFalsy();
        });
        
        it('should return false if the current screen width is greater than 769', () => {
            service.screenWidth = 770;
            
            expect(service.isMobileSize).toBeFalsy();
        });
    });
});
