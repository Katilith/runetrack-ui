import { Component, OnInit } from '@angular/core';
import { MobileService } from '../../layout/mobile/mobile.service';
import { PlayerService } from '../player.service';

@Component({
	selector: 'rune-player-overview',
	templateUrl: './player-overview.component.html',
	styleUrls: [ './player-overview.component.scss' ]
})
export class PlayerOverviewComponent implements OnInit {

	public constructor(private mobileService: MobileService,
		private playerService: PlayerService) {
	}

	public ngOnInit(): void {
	}
	
	public get isMobileSize() {
		return this.mobileService.isMobileSize;
	}

	public get profile() {
		return this.playerService.profile;
	}

	public get playerName() {
		return this.playerService.profile.name;
	}

}
