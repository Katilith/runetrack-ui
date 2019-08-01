import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewSkillsComponent } from './player-overview-skills.component';

describe('PlayerOverviewSkillsComponent', () => {
	let component: PlayerOverviewSkillsComponent;
	let fixture: ComponentFixture<PlayerOverviewSkillsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PlayerOverviewSkillsComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlayerOverviewSkillsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
