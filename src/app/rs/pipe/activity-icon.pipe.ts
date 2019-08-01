import { Pipe, PipeTransform } from '@angular/core';
import { PlayerActivity } from '../rs.domain';

@Pipe({
	name: 'runeActivityIcon'
})
export class ActivityIconPipe implements PipeTransform {
	
	public transform(value: PlayerActivity, ...args: any[]): any {
		const text = value.text;
		let className = 'rune-activity-icon rs-icon ';
		
		if(text.startsWith('Quest') || text.endsWith('Quest Points obtained')) {
			className += 'quest-icon';
		} else if(text.startsWith('Levelled up')) {
			const skillName = text.substring('Levelled up '.length, text.length - 1).toLowerCase();
			className += 'skill-icon icon-' + skillName;
		} else if(text.indexOf('XP in ') !== -1) {
			const skillName = text.substring(text.indexOf('XP in ') + 6, text.length).toLowerCase();
			className += 'skill-icon icon-' + skillName;
		} else if(text.startsWith('I found') && text.endsWith(' pet.')) {
			const skillName = text.substring(text.indexOf(',') + 6, text.length - 5).toLowerCase();
			className += 'skill-icon icon-' + skillName;
		} else if(text.startsWith('I killed')) {
			className += 'combat-icon';
		} else if(text.endsWith('songs unlocked')) {
			className += 'music-icon';
		} else if(text === 'Visited my Clan Citadel.' || text === 'Capped at my Clan Citadel.' ||
			text.startsWith('Maintained Clan Fealty ') || text.startsWith('Reached Clan Fealty')) {
			className += 'clan-chat-icon';
		} else if(text.startsWith('I found a') || text.startsWith('I found some')) {
			className += 'backpack-icon';
		} else if(text.endsWith('treasure trail completed.')) {
			className += 'clue-scroll-icon';
		} else if(text.startsWith('Won a case')) {
			className += 'case-icon';
		} else if(text === 'Large amount of coins obtained.') {
			className += 'coins-icon';
		} else if(text.startsWith('Levelled all skills') || text.endsWith('Total levels gained')) {
			className += 'skills-icon';
		} else if(text.startsWith('Improved my')) {
			className += 'equipment-icon';
		} else if(text.startsWith('Dungeon floor')) {
			className += 'skill-icon icon-dungeoneering';
		} else if(text.toLowerCase().indexOf('max cape') !== -1) {
			className += 'maxcape-icon';
		} else {
			className += 'activity-icon';
		}
		
		return className;
	}
	
}
