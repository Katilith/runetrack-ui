import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { PlayerMonthlyXpGain, PlayerSkill } from '../../../../../shared/rs/rs.domain';
import { getXpRequiredForLevel, skillNames, Skills } from '../../../../../shared/rs/rs.constants';

@Component({
    selector: 'rune-skill-overview',
    templateUrl: './skill-overview.component.html',
    styleUrls: [ './skill-overview.component.scss' ]
})
export class SkillOverviewComponent implements OnInit, OnChanges {
    
    @Input() public skill: PlayerSkill;
    @Input() public xpGains: PlayerMonthlyXpGain;
    @Output() public closeOverview: EventEmitter<void> = new EventEmitter();
    private _nextLevel: number;
    private _nextLevelXp: number;
    private _remainingXpToNextLevel: number;
    private _remainingXpTooltip: string;
    private _percentToNextLevel: number = 0;
    
    public constructor(private decimalPipe: DecimalPipe) {
    }
    
    public ngOnInit(): void {
        this.calculateValues(this.skill);
    }
    
    public ngOnChanges(changes: SimpleChanges): void {
        if(changes.skill && changes.skill.currentValue) {
            this.calculateValues(changes.skill.currentValue);
        }
    }
    
    private calculateValues(skill: PlayerSkill): void {
        if(!skill) {
            return;
        }
        
        this._nextLevel = null;
        this._nextLevelXp = 0;
        this._remainingXpToNextLevel = 0;
        this._percentToNextLevel = 0;
        
        let maxLevel = 99;
        let elite = false;
        if(skill.id === Skills.INVENTION) {
            maxLevel = 150;
            elite = true;
        } else if(skill.id === Skills.DUNGEONEERING || skill.id === Skills.SLAYER) {
            maxLevel = 120;
        }
        
        const nextLevel = skill.level + 1;
        if(nextLevel > maxLevel) {
            return;
        }
        
        this._nextLevel = nextLevel;
        this._nextLevelXp = getXpRequiredForLevel(nextLevel, elite);
        this._remainingXpToNextLevel = Math.floor(this._nextLevelXp - skill.xp);
        const currentLevelXp = getXpRequiredForLevel(skill.level, elite);
        const xpBetweenLevels = this._nextLevelXp - currentLevelXp;
        
        this._remainingXpTooltip = [
            `Next Level At: ${this.decimalPipe.transform(this._nextLevelXp, '1.0-0')}`,
            `Remaining:     ${this.decimalPipe.transform(this._remainingXpToNextLevel, '1.0-0')}`
        ].join('\n');
        
        this._percentToNextLevel = Math.round(this._remainingXpToNextLevel / xpBetweenLevels * 100);
    }
    
    public get skillNames() {
        return skillNames;
    }
    
    public get nextLevel() {
        return this._nextLevel;
    }
    
    public get nextLevelXp() {
        return this._nextLevelXp;
    }
    
    public get remainingXpToNextLevel() {
        return this._remainingXpToNextLevel;
    }
    
    public get remainingXpTooltip() {
        return this._remainingXpTooltip;
    }
    
    public get percentToNextLevel() {
        return this._percentToNextLevel;
    }
    
    public get completePercent() {
        return 100 - this._percentToNextLevel;
    }
    
}
