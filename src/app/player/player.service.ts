import { Injectable } from '@angular/core';
import { PlayerMonthlyXpGain, PlayerProfile, PlayerQuest } from '../rs/rs.domain';
import { RsService } from '../rs/rs.service';
import { skillOrder } from '../rs/rs.constants';

@Injectable()
export class PlayerService {
	
	public profile: PlayerProfile = null;
	public isFavorite: boolean = null;
	public loading: boolean = false;
	public error: string = null;
	public xpGains: PlayerMonthlyXpGain[] = new Array(skillOrder.length);
	private _quests: PlayerQuest[] = [];
	
	public constructor(private rsService: RsService) {
	}
	
	public loadUserProfile(playerName: string): void {
		// Whenever a new user is loaded we empty the quest data array.
		this._quests = [];
		
		this.rsService.getPlayerProfile(playerName)
			.then(profile => {
				this.profile = profile;
				this.isFavorite = this.rsService.checkIfFavoritePlayer(profile.name);
				this.loading = false;
			}, error => {
				this.error = error;
				this.loading = false;
			});
	}
	
	public loadUserQuestData(playerName: string): Promise<PlayerQuest[]> {
		if(this._quests.length !== 0) {
			return Promise.resolve(this._quests);
		}
		
		return this.rsService.getQuestData(playerName)
			.then(response => {
				this._quests = response.quests;
				return response.quests;
			});
	}
	
	public get quests() {
		return this._quests;
	}
	
}
