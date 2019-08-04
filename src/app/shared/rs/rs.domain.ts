import * as moment from 'moment';

export interface QuestDataResponse {
    quests: PlayerQuest[];
    loggedIn: boolean;
}

export interface PlayerQuest {
    title: string;
    status: 'COMPLETED' | 'STARTED' | 'NOT_STARTED';
    difficulty: number;
    members: boolean;
    questPoints: number;
    userEligible: boolean;
}

export interface MonthlyXpGainResponse {
    monthlyXpGain: PlayerMonthlyXpGain[];
    loggedIn: boolean;
}

export interface PlayerMonthlyXpGain {
    skillId: number;
    totalXp: number;
    averageXpGain: number;
    totalGain: number;
    monthData: PlayerMonthlyXpData[];
}

export interface PlayerMonthlyXpData {
    xpGain: number;
    timestamp: number;
    rank: number;
}

export interface PlayerProfile {
    name?: string;
    rank?: string;
    totalskill?: number;
    totalxp?: number;
    combatlevel?: number;
    magic?: number;
    melee?: number;
    ranged?: number;
    questsstarted?: number;
    questscomplete?: number;
    questsnotstarted?: number;
    activities?: PlayerActivity[];
    skillvalues?: PlayerSkill[];
    error?: string;
    loggedIn: string;
}

export interface PlayerActivity {
    date: string;
    moment: moment.Moment;
    details: string;
    text: string;
}

export interface PlayerSkill {
    id: number;
    rank: number;
    level: number;
    xp: number;
}
