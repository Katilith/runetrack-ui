import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerOverviewActivityComponent } from './player-overview-activity.component';
import { RsModule } from '../../../../shared/rs/rs.module';
import { MatCardModule } from '@angular/material/card';

describe('PlayerOverviewActivityComponent', () => {
    let component: PlayerOverviewActivityComponent;
    let fixture: ComponentFixture<PlayerOverviewActivityComponent>;
    
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PlayerOverviewActivityComponent ],
            imports: [ RsModule, MatCardModule ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerOverviewActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
