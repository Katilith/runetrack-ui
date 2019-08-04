import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { LoaderModule } from '../../shared/loader/loader.module';
import { ErrorModule } from '../../shared/error/error.module';
import { MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayerService } from './player.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlayerComponent', () => {
	let component: PlayerComponent;
	let fixture: ComponentFixture<PlayerComponent>;
	let playerService: PlayerService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PlayerComponent ],
			imports: [ RouterTestingModule, HttpClientTestingModule, LoaderModule, ErrorModule, MatIconModule ],
			providers: [ PlayerService ]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlayerComponent);
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
		spyOn(playerService, 'loadUserProfile');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
