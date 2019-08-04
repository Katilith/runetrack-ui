import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewSkillsComponent } from './player-overview-skills.component';
import { SkillOverviewComponent } from './skill-overview/skill-overview.component';
import { MatCardModule, MatDividerModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { RsModule } from '../../../../shared/rs/rs.module';
import { LoaderModule } from '../../../../shared/loader/loader.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DecimalPipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayerService } from '../../player.service';

describe('PlayerOverviewSkillsComponent', () => {
    let component: PlayerOverviewSkillsComponent;
    let fixture: ComponentFixture<PlayerOverviewSkillsComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PlayerOverviewSkillsComponent, SkillOverviewComponent ],
            imports: [ RouterTestingModule, HttpClientTestingModule,
                MatIconModule, MatTooltipModule, MatCardModule, MatDividerModule,
                RsModule, LoaderModule ],
            providers: [ DecimalPipe, PlayerService ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerOverviewSkillsComponent);
        component = fixture.componentInstance;
        component.profile = {
            name: 'Big Boss',
            skillvalues: [
                {
                    id: 0,
                    level: 1,
                    xp: 0,
                    rank: 0
                }
            ],
            loggedIn: ''
        };
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
