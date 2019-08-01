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
