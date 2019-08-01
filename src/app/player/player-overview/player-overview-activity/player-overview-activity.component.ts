import { Component, Input, OnInit } from '@angular/core';
import { PlayerActivity } from '../../../rs/rs.domain';

@Component({
	selector: 'rune-player-overview-activity',
	templateUrl: './player-overview-activity.component.html',
	styleUrls: [ './player-overview-activity.component.scss' ]
})
export class PlayerOverviewActivityComponent implements OnInit {

	@Input() public activities: PlayerActivity[];
	@Input() public tabbed: boolean = false;
	private _activityIdx: number = null;

	public constructor() {
	}

	public ngOnInit(): void {
	}
	
	public expandActivity(idx: number): void {
		if(idx === this._activityIdx) {
			this._activityIdx = null;
		} else {
			this._activityIdx = idx;
		}
	}
	
	public get activityIdx() {
		return this._activityIdx;
	}

}
