import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewQuestsComponent } from './player-overview-quests.component';
import { LoaderModule } from '../../../../shared/loader/loader.module';
import { MatCardModule, MatTooltipModule } from '@angular/material';
import { RsModule } from '../../../../shared/rs/rs.module';
import { PlayerService } from '../../player.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlayerOverviewQuestsComponent', () => {
    let component: PlayerOverviewQuestsComponent;
    let fixture: ComponentFixture<PlayerOverviewQuestsComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PlayerOverviewQuestsComponent ],
            imports: [ HttpClientTestingModule, LoaderModule, MatCardModule, MatTooltipModule, RsModule ],
            providers: [ PlayerService ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerOverviewQuestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
