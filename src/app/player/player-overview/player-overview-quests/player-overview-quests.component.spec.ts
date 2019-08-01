import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewQuestsComponent } from './player-overview-quests.component';

describe('PlayerOverviewQuestsComponent', () => {
	let component: PlayerOverviewQuestsComponent;
	let fixture: ComponentFixture<PlayerOverviewQuestsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PlayerOverviewQuestsComponent ]
		})
			.compileComponents();
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
