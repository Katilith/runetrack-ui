import { Pipe, PipeTransform } from '@angular/core';
import { PlayerQuest } from '../rs.domain';

@Pipe({
	name: 'runeQuestClass'
})
export class QuestClassPipe implements PipeTransform {

	public transform(value: PlayerQuest, ...args: any[]): any {
		let status = 'not-started';
		if(value.status === 'COMPLETED') {
			status = 'completed';
		} else if(value.status === 'STARTED') {
			status = 'started';
		}

		return `rune-quest rune-quest-${ status }`;
	}

}
