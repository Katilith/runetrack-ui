import { ActivityIconPipe } from './activity-icon.pipe';
import { PlayerActivity } from '../rs.domain';

describe('ActivityIconPipe', () => {
	let pipe: ActivityIconPipe;
	
	beforeEach(() => pipe = new ActivityIconPipe());
	
	it('should return the default CSS classes', () => {
		const input = {
			text: 'hi'
		};
		const expected = 'rune-activity-icon rs-icon activity-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the quest icon if the player completed a quest', () => {
		const input = {
			text: 'Quest Complete: Dragon Slayer'
		};
		const expected = 'rune-activity-icon rs-icon quest-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the quest icon if the player reached a quest point milestone', () => {
		const input = {
			text: '50 Quest Points obtained'
		};
		const expected = 'rune-activity-icon rs-icon quest-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the skill icon if the player levelled up a skill (attack)', () => {
		const input = {
			text: 'Levelled up Attack.'
		};
		const expected = 'rune-activity-icon rs-icon skill-icon icon-attack';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the skill icon if the player levelled up a skill (defence)', () => {
		const input = {
			text: 'Levelled up Defence.'
		};
		const expected = 'rune-activity-icon rs-icon skill-icon icon-defence';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the skill icon if the player reached an XP milestone in a skill (constitution)', () => {
		const input = {
			text: '50000000XP in Constitution'
		};
		const expected = 'rune-activity-icon rs-icon skill-icon icon-constitution';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the skill icon if the player reached an XP milestone in a skill (hunter)', () => {
		const input = {
			text: '100000000XP in Hunter'
		};
		const expected = 'rune-activity-icon rs-icon skill-icon icon-hunter';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the skill icon if the player finds a skill pet (magic)', () => {
		const input = {
			text: 'I found Newton, the Magic pet.'
		};
		const expected = 'rune-activity-icon rs-icon skill-icon icon-magic';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the combat icon if the player killed a boss', () => {
		const input = {
			text: 'I killed Nex'
		};
		const expected = 'rune-activity-icon rs-icon combat-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the music icon if the player reached a song unlock milestone', () => {
		const input = {
			text: '500 songs unlocked'
		};
		const expected = 'rune-activity-icon rs-icon music-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the clan icon if the player visited their clan citadel', () => {
		const input = {
			text: 'Visited my Clan Citadel.'
		};
		const expected = 'rune-activity-icon rs-icon clan-chat-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the clan icon if the player capped at their clan citadel', () => {
		const input = {
			text: 'Capped at my Clan Citadel.'
		};
		const expected = 'rune-activity-icon rs-icon clan-chat-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the clan icon if the player maintained their clan fealty rank', () => {
		const input = {
			text: 'Maintained Clan Fealty 3'
		};
		const expected = 'rune-activity-icon rs-icon clan-chat-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the clan icon if the player reached a new clan fealty rank', () => {
		const input = {
			text: 'Reached Clan Fealty 3'
		};
		const expected = 'rune-activity-icon rs-icon clan-chat-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the backpack icon if the player found a special item', () => {
		const input = {
			text: 'I found a Dragon Longsword'
		};
		const expected = 'rune-activity-icon rs-icon backpack-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the backpack icon if the player found special items', () => {
		const input = {
			text: 'I found some partyhats'
		};
		const expected = 'rune-activity-icon rs-icon backpack-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the clue scroll icon if the player reached a clue scroll milestone', () => {
		const input = {
			text: '50 treasure trail completed.'
		};
		const expected = 'rune-activity-icon rs-icon clue-scroll-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the case icon if the player won a court case', () => {
		const input = {
			text: 'Won a case'
		};
		const expected = 'rune-activity-icon rs-icon case-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the coins icon if the player found a large amount of coins', () => {
		const input = {
			text: 'Large amount of coins obtained.'
		};
		const expected = 'rune-activity-icon rs-icon coins-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the skills icon if the player levelled all skills above a certain level', () => {
		const input = {
			text: 'Levelled all skills to 45.'
		};
		const expected = 'rune-activity-icon rs-icon skills-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the skills icon if the player reached a milestone total level', () => {
		const input = {
			text: '600 Total levels gained'
		};
		const expected = 'rune-activity-icon rs-icon skills-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the equipment icon if the player improved their equipment', () => {
		const input = {
			text: 'Improved my Rune Platebody'
		};
		const expected = 'rune-activity-icon rs-icon equipment-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the dungeoneering icon if the player reached a new floor', () => {
		const input = {
			text: 'Dungeon floor 5 reached'
		};
		const expected = 'rune-activity-icon rs-icon skill-icon icon-dungeoneering';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
	
	it('should add the max cape icon if the player purchased their first max cape', () => {
		const input = {
			text: 'I purchased my first max cape.'
		};
		const expected = 'rune-activity-icon rs-icon maxcape-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
});
