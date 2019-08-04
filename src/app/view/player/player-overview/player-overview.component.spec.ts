import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewComponent } from './player-overview.component';
import { PlayerOverviewModule } from './player-overview.module';
import { PlayerService } from '../player.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PlayerOverviewComponent', () => {
    let component: PlayerOverviewComponent;
    let fixture: ComponentFixture<PlayerOverviewComponent>;
    let playerService: PlayerService;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [ PlayerService ],
            imports: [ BrowserAnimationsModule, PlayerOverviewModule, HttpClientTestingModule ]
        }).compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerOverviewComponent);
        component = fixture.componentInstance;
        playerService = fixture.debugElement.injector.get(PlayerService);
        playerService.profile = {
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
