import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanOverviewComponent } from './clan-overview.component';

describe('ClanOverviewComponent', () => {
	let component: ClanOverviewComponent;
	let fixture: ComponentFixture<ClanOverviewComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ClanOverviewComponent ]
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