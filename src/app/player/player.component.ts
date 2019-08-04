import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { ActivatedRoute } from '@angular/router';
import { MobileService } from '../layout/mobile/mobile.service';
import { RsService } from '../rs/rs.service';
import { skillOrder } from '../rs/rs.constants';

@Component({
	selector: 'rune-player',
	templateUrl: './player.component.html',
	styleUrls: [ './player.component.scss' ]
})
export class PlayerComponent implements OnInit {
	
	private playerName: string = '';
	
	public constructor(private route: ActivatedRoute,
		private mobileService: MobileService,
		private playerService: PlayerService,
		private rsService: RsService) {
	}
	
	public ngOnInit(): void {
		this.route.params.subscribe(params => {
			if(params.playerName && this.playerName !== params.playerName) {
				this.playerService.loading = true;
				this.playerName = params.playerName;
				this.playerService.profile = null;
				this.playerService.error = null;
				this.playerService.isFavorite = null;
				this.playerService.xpGains = new Array(skillOrder.length);
				this.playerService.loadUserProfile(this.playerName);
			}
		});
	}
	
	public makeFavorite(): void {
		this.rsService.setFavoritePlayer(this.playerName);
		this.playerService.isFavorite = true;
	}
	
	public removeFavorite(): void {
		this.rsService.removeFavoritePlayer();
		this.playerService.isFavorite = false;
	}

	public get errorInfo() {
		if(!this.error) {
			return {};
		}

		if(this.error === 'PROFILE_PRIVATE') {
			return { icon: 'lock', message: 'This user\'s profile is set to private.' };
		} else if(this.error === 'NO_PROFILE') {
			return { icon: 'person_outline', message: 'The requested user was not found.' };
		} else if(this.error === 'NOT_A_MEMBER') {
			return { icon: 'person_outline', message: 'This player is not a member.' };
		} else {
			return { icon: 'error_outline', message: 'An unknown error has occurred, please try again later.' };
		}
	}
	
	public get isMobileSize() {
		return this.mobileService.isMobileSize;
	}
	
	public get isFavorite() {
		return this.playerService.isFavorite;
	}
	
	public get profile() {
		return this.playerService.profile;
	}
	
	public get error() {
		return this.playerService.error;
	}
	
	public get loading() {
		return this.playerService.loading;
	}
	
}
