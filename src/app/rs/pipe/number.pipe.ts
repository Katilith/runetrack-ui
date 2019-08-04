import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'runeNumberPipe'
})
export class NumberPipe implements PipeTransform {
	
	public transform(value: number, format?: string): any {
		const str = value.toString();
		
		if(value > 999999999) { // 999,999,999 (1b range)
			return str.substring(0, 4) + 'M';
		} else if(value > 99999999) { // 99,999,999 (100m range)
			return str.substring(0, 3) + 'M';
		} else if(value > 9999999) { // 9,999,999 (10m range)
			const response = str.substring(0, 2);
			
			if(str.charAt(2) !== '0') {
				return response + '.' + str.charAt(2) + 'M';
			} else {
				return response + 'M';
			}
		} else if(value > 999999) { // 999,999 (1m range)
			const response = str.substring(0, 1);
			
			if(str.charAt(1) !== '0') {
				return response + '.' + str.charAt(1) + 'M';
			} else {
				return response + 'M';
			}
		} else if(value > 99999) { // 99,999 (100k range)
			return str.substring(0, 3) + 'K';
		} else if(value > 9999) { // 9,999 (10k range)
			const response = str.substring(0, 2);
			
			if(str.charAt(2) !== '0') {
				return response + '.' + str.charAt(2) + 'K';
			} else {
				return response + 'K';
			}
		} else if(value > 999) { // 999 (1k range)
			const response = str.substring(0, 1);

			if(str.charAt(1) !== '0') {
				return response + '.' + str.charAt(1) + 'K';
			} else {
				return response + 'K';
			}
		}
		
		return value;
	}
	
}
