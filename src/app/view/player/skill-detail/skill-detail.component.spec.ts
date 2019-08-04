import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailComponent } from './skill-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SkillDetailModule } from './skill-detail.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayerService } from '../player.service';

describe('SkillDetailComponent', () => {
	let component: SkillDetailComponent;
	let fixture: ComponentFixture<SkillDetailComponent>;
	let playerService: PlayerService;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HttpClientTestingModule,
				SkillDetailModule
			],
			providers: [ PlayerService ]
		}).compileComponents();
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(SkillDetailComponent);
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
