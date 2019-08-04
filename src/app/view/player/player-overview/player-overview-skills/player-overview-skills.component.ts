import { Component, Input, OnInit } from '@angular/core';
import { PlayerProfile, PlayerSkill } from '../../../../shared/rs/rs.domain';
import { DecimalPipe } from '@angular/common';
import { RsService } from '../../../../shared/rs/rs.service';
import { skillNames, skillOrder } from '../../../../shared/rs/rs.constants';
import { PlayerService } from '../../player.service';

@Component({
	selector: 'rune-player-overview-skills',
	templateUrl: './player-overview-skills.component.html',
	styleUrls: [ './player-overview-skills.component.scss' ]
})
export class PlayerOverviewSkillsComponent implements OnInit {

	@Input() public profile: PlayerProfile;
	@Input() public tabbed: boolean = false;
	private _skills: PlayerSkill[] = [];
	private _displayedSkillId: number = null;

	public constructor(private decimalPipe: DecimalPipe,
		private rsService: RsService,
		private playerService: PlayerService) {
	}

	public ngOnInit(): void {
		this.refactorSkillsArray(this.profile.skillvalues);
	}

	public loadXpGains(skillId: number): void {
		if(this._displayedSkillId === skillId) {
			this._displayedSkillId = null;
			return;
		}

		this._displayedSkillId = skillId;

		if(this.playerService.xpGains[ skillId ]) {
			return;
		}

		// TODO error-out gracefully
		this.rsService.getMonthlySkillGains(this.profile.name, skillId)
			.then(response => this.playerService.xpGains[ skillId ] = response.monthlyXpGain[ 0 ]);
	}

	private refactorSkillsArray(skills: PlayerSkill[]): void {
		this._skills = new Array(skillOrder.length);

		for(const skill of skills) {
			this._skills[ skill.id ] = skill;
		}
	}

	public skillTooltip(skill: PlayerSkill): string {
		const tooltipArray = [ skillNames[ skill.id ],
			`Level: ${ skill.level }`,
			`XP:    ${ this.decimalPipe.transform(skill.xp, '1.0-0') }` ];

		if(skill.rank !== 0) {
			tooltipArray.push(`Rank:  ${this.decimalPipe.transform(skill.rank, '1.0-0')}`);
		}

		return tooltipArray.join('\n');
	}
	
	public closeSkillOverview(): void {
		this._displayedSkillId = null;
	}
	
	public get skillOrder(): number[] {
		return skillOrder;
	}

	public get skills() {
		return this._skills;
	}

	public get xpGains() {
		return this.playerService.xpGains;
	}

	public get displayedSkillId() {
		return this._displayedSkillId;
	}

}
