import { NumberPipe } from './number.pipe';

describe('NumberPipe', () => {
	let pipe: NumberPipe;
	
	beforeEach(() => pipe = new NumberPipe());
	
	it('should return 1 when given 1', () => {
		const input = 1;
		const output = '1';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 200 when given 200', () => {
		const input = 200;
		const output = '200';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 1k when given 1000', () => {
		const input = 1000;
		const output = '1K';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 2.1k when given 2156', () => {
		const input = 2156;
		const output = '2.1K';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 10k when given 10099', () => {
		const input = 10099;
		const output = '10K';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 21.6K when given 21654', () => {
		const input = 21654;
		const output = '21.6K';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 300K when given 300987', () => {
		const input = 300987;
		const output = '300K';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 678K when given 678999', () => {
		const input = 678999;
		const output = '678K';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 2M when given 2000987', () => {
		const input = 2000987;
		const output = '2M';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 3.3M when given 3398987', () => {
		const input = 3398987;
		const output = '3.3M';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 10M when given 10000000', () => {
		const input = 10000000;
		const output = '10M';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 11.1M when given 11198000', () => {
		const input = 11198000;
		const output = '11.1M';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 998M when given 998998998', () => {
		const input = 998998998;
		const output = '998M';
		
		expect(pipe.transform(input)).toEqual(output);
	});
	
	it('should return 2147M when given 2147000000', () => {
		const input = 2147000000;
		const output = '2147M';
		
		expect(pipe.transform(input)).toEqual(output);
	});
});
