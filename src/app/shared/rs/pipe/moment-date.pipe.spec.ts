import { MomentDatePipe } from './moment-date.pipe';
import * as moment from 'moment';

describe('MomentDatePipe', () => {
	let pipe: MomentDatePipe;
	
	beforeEach(() => pipe = new MomentDatePipe());
	
	it('should return the formatted date string given a moment date object and a specific format', () => {
		const input = 1564956879000;
		const output = '04-Aug-2019 10:14';
		expect(pipe.transform(moment.utc(input), 'DD-MMM-YYYY hh:mm')).toEqual(output);
	});
	
	it('should return the formatted date string given a moment date object and no format', () => {
		const input = 1564956879000;
		const output = '2019-08-04T22:14:39Z';
		expect(pipe.transform(moment.utc(input))).toEqual(output);
	});
});
