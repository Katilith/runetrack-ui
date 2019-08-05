import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ClanOverviewComponent } from './clan-overview.component';
import { ClanOverviewModule } from './clan-overview.module';

describe('ClanOverviewComponent', () => {
    let component: ClanOverviewComponent;
    let fixture: ComponentFixture<ClanOverviewComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule, HttpClientTestingModule, ClanOverviewModule ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(ClanOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
