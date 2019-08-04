import { ActivityIconPipe } from './activity-icon.pipe';
import { PlayerActivity } from '../rs.domain';

describe('ActivityIconPipe', () => {
	let pipe: ActivityIconPipe;
	
	beforeEach(() => {
		pipe = new ActivityIconPipe();
	});
	
	it('should return the default CSS classes', () => {
		const input = {
			text: 'hi'
		};
		const expected = 'rune-activity-icon rs-icon activity-icon';
		expect(pipe.transform(input as PlayerActivity)).toEqual(expected);
	});
});
