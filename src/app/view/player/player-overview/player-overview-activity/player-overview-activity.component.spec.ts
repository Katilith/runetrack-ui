import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOverviewActivityComponent } from './player-overview-activity.component';

describe('PlayerOverviewActivityComponent', () => {
	let component: PlayerOverviewActivityComponent;
	let fixture: ComponentFixture<PlayerOverviewActivityComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PlayerOverviewActivityComponent ]
		})
			.compileComponents();
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
