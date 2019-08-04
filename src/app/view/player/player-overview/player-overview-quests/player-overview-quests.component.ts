import { Component, Input, OnInit } from '@angular/core';
import { PlayerQuest } from '../../../../shared/rs/rs.domain';
import { PlayerService } from '../../player.service';

@Component({
    selector: 'rune-player-overview-quests',
    templateUrl: './player-overview-quests.component.html',
    styleUrls: [ './player-overview-quests.component.scss' ]
})
export class PlayerOverviewQuestsComponent implements OnInit {
    
    @Input() public playerName: string;
    @Input() public tabbed: boolean = false;
    private _loading: boolean = true;
    private _quests: PlayerQuest[] = [];
    private _inProgressQuestPoints: number = 0;
    private _completedQuestPoints: number = 0;
    private _notStartedQuestPoints: number = 0;
    private _totalQuestPoints: number = 0;
    private _inProgressQuests: number = 0;
    private _completedQuests: number = 0;
    private _notStartedQuests: number = 0;
    
    public constructor(private playerService: PlayerService) {
    }
    
    public ngOnInit(): void {
        this.playerService.loadUserQuestData(this.playerName)
            .then(quests => {
                this._quests = quests;
                this.calculateQuestPoints();
                this._loading = false;
            });
    }
    
    private calculateQuestPoints(): void {
        for(const quest of this.quests) {
            this._totalQuestPoints += quest.questPoints;
            
            if(quest.status === 'COMPLETED') {
                this._completedQuestPoints += quest.questPoints;
                this._completedQuests++;
            } else if(quest.status === 'STARTED') {
                this._inProgressQuestPoints += quest.questPoints;
                this._inProgressQuests++;
            } else {
                this._notStartedQuestPoints += quest.questPoints;
                this._notStartedQuests++;
            }
        }
    }
    
    public get questOverviewTooltip(): string {
        const tooltipArray = [
            `Completed:`,
            `${this.questCompletePercentage.toFixed(2)}% | ${this._completedQuests} Quests, ${this._completedQuestPoints} QP`,
            '',
            `In-Progress:`,
            `${this.questStartedPercentage.toFixed(2)}% | ${this._inProgressQuests} Quests, ${this._inProgressQuestPoints} QP`,
            '',
            `Not Started:`,
            `${this.questNotStartedPercentage.toFixed(2)}% | ${this._notStartedQuests} Quests, ${this._notStartedQuestPoints} QP`
        ];
        
        return tooltipArray.join('\n');
    }
    
    public get questCompletePercentage(): number {
        if(this._completedQuests === 0) {
            return 0;
        }
        
        return (this._completedQuests / this.quests.length * 100);
    }
    
    public get questStartedPercentage(): number {
        if(this._inProgressQuests === 0) {
            return 0;
        }
        
        return (this._inProgressQuests / this.quests.length * 100);
    }
    
    public get questNotStartedPercentage(): number {
        const percentStarted = this.questCompletePercentage + this.questStartedPercentage;
        return 100 - percentStarted;
    }
    
    public get loading() {
        return this._loading;
    }
    
    public get quests() {
        return this._quests;
    }
    
    public get completedQuestPoints() {
        return this._completedQuestPoints;
    }
    
    public get totalQuestPoints() {
        return this._totalQuestPoints;
    }
    
}
