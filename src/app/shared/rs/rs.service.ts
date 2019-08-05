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

const RS_APPS = environment.rsApi.apps;
const RS_AVATARS = environment.rsApi.avatars;

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
            this.clanDataSub = this.http.get(`${environment.rsApi.services}/clans/${clanName}`, {observe: 'response', responseType: 'text'})
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
        
        const url = `${RS_APPS}/runemetrics/quests`;
        const params = new HttpParams()
            .append('user', playerName);
        
        return new Promise((resolve, reject) => {
            this.playerProfileSub = this.http.get<QuestDataResponse>(url, {params})
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
        
        const url = `${RS_APPS}/runemetrics/xp-monthly`;
        const params = new HttpParams()
            .append('searchName', playerName)
            .append('skillid', skillId.toString());
        
        return new Promise((resolve, reject) => {
            this.playerProfileSub = this.http.get<MonthlyXpGainResponse>(url, {params})
                .subscribe(response => {
                    if(!response) {
                        reject('UNKNOWN_ERROR');
                    } else {
                        resolve(response);
                    }
                }, () => reject('UNKNOWN_ERROR'));
        });
    }
    
    public getPlayerProfile(playerName: string, activityCount: number = 20): Promise<PlayerProfile> {
        clearSubscription(this.playerProfileSub);
        
        const url = `${RS_APPS}/runemetrics/profile/profile`;
        const params = new HttpParams()
            .append('user', playerName)
            .append('activities', activityCount.toString());
        
        return new Promise((resolve, reject) => {
            this.playerProfileSub = this.http.get<PlayerProfile>(url, {params})
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
