import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { clearSubscription } from '../../util/subscription-helper';
import {
    ClanInfo,
    ClanMember,
    MonthlyXpGainResponse,
    PlayerActivity,
    PlayerProfile,
    PlayerSkill,
    QuestDataResponse
} from './rs.domain';
import * as moment from 'moment';

/**
 * @TODO Unit Testing
 */
@Injectable({
    providedIn: 'root'
})
export class RsService {
    
    private playerProfileSub: Subscription = null;
    private skillGainsSub: Subscription = null;
    private questDataSub: Subscription = null;
    private clanDataSub: Subscription = null;
    
    public constructor(private http: HttpClient) {
    }
    
    public getFavoritePlayer(): string {
        return localStorage.getItem('favorite-player');
        
    }
    
    public removeFavoritePlayer(): void {
        localStorage.removeItem('favorite-player');
    }
    
    public setFavoritePlayer(playerName: string): void {
        localStorage.setItem('favorite-player', playerName);
    }
    
    public checkIfFavoritePlayer(playerName: string): boolean {
        const savedPlayer = this.getFavoritePlayer();
        return (savedPlayer !== null && savedPlayer === playerName);
    }
    
    public getClanDetails(clanName): Promise<ClanInfo> {
        clearSubscription(this.clanDataSub);
        
        return new Promise(((resolve, reject) => {
            this.clanDataSub = this.http.get(`${ environment.api }/clans/${clanName}`, { observe: 'response', responseType: 'text' })
                .subscribe(response => {
                    const clanContent = response.body;
                    if(!clanContent) {
                        reject();
                        return;
                    }
            
                    const clanDataLines = clanContent.split('\n');
            
                    if(clanDataLines.length < 2) {
                        reject();
                        return;
                    }
                    
                    let totalXp: number = 0;
                    let totalKills: number = 0;
                    let averageTotalXp: number = 0;
                    let averageTotalKills: number = 0;
            
                    const members: ClanMember[] = [];
            
                    for(const clanDataLine of clanDataLines) {
                        if(!clanDataLine || clanDataLine.trim() === '' || clanDataLine === 'Clanmate, Clan Rank, Total XP, Kills') {
                            continue;
                        }
                
                        const clanMemberData = clanDataLine.split(',');
                
                        const member = {
                            playerName: clanMemberData[ 0 ].replace(/�/g, ' '),
                            clanRank: clanMemberData[ 1 ],
                            totalXp: parseInt(clanMemberData[ 2 ], 10),
                            kills: parseInt(clanMemberData[ 3 ], 10)
                        };
                        
                        totalXp += member.totalXp;
                        totalKills += member.kills;
    
                        members.push(member);
                    }
            
                    if(members.length !== 0) {
                        averageTotalXp = totalXp / members.length;
                        averageTotalKills = totalKills / members.length;
                        resolve({ totalMembers: members.length, totalXp, totalKills, averageTotalXp, averageTotalKills, members });
                    } else {
                        reject();
                    }
                }, () => reject());
        }));
    }
    
    public getQuestData(playerName: string): Promise<QuestDataResponse> {
        clearSubscription(this.questDataSub);
        
        const url = `${ environment.api }/profiles/${ playerName }/quests`;
        
        return new Promise((resolve, reject) => {
            this.playerProfileSub = this.http.get<QuestDataResponse>(url)
                .subscribe(response => {
                    if(!response) {
                        reject('UNKNOWN_ERROR');
                    } else {
                        resolve(response);
                    }
                }, () => reject('UNKNOWN_ERROR'));
        });
    }
    
    public getMonthlySkillGains(playerName: string, skillId: number): Promise<MonthlyXpGainResponse> {
        clearSubscription(this.skillGainsSub);
        
        const url = `${ environment.api }/profiles/${ playerName }/skills/${ skillId }`;
        
        return new Promise((resolve, reject) => {
            this.playerProfileSub = this.http.get<MonthlyXpGainResponse>(url)
                .subscribe(response => {
                    if(!response) {
                        reject('UNKNOWN_ERROR');
                    } else {
                        resolve(response);
                    }
                }, () => reject('UNKNOWN_ERROR'));
        });
    }
    
    public getPlayerProfile(playerName: string): Promise<PlayerProfile> {
        clearSubscription(this.playerProfileSub);
        
        const url = `${ environment.api }/profiles/${ playerName }`;
        
        return new Promise((resolve, reject) => {
            this.playerProfileSub = this.http.get<PlayerProfile>(url)
                .subscribe(response => {
                    if(!response) {
                        reject('UNKNOWN_ERROR');
                    } else if(response.error) {
                        reject(response.error);
                    } else {
                        this.transformActivityDates(response.activities);
                        this.transformSkillXp(response.skillvalues);
                        resolve(response);
                    }
                }, () => reject('UNKNOWN_ERROR'));
        });
    }
    
    private transformSkillXp(skills: PlayerSkill[]): void {
        for(const skill of skills) {
            if(skill.xp > 0) {
                const skillStr = skill.xp.toString();
                const whole = skillStr.substring(0, skillStr.length - 1);
                const decimal = skillStr.substring(skillStr.length - 1);
                
                skill.xp = parseFloat(whole + '.' + decimal);
            }
        }
    }
    
    private transformActivityDates(activities: PlayerActivity[]): void {
        for(const activity of activities) {
            activity.moment = moment.utc(activity.date, [ 'DD-MMM-YYYY HH:mm' ]);
        }
    }
    
}
