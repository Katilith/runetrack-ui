import { Pipe, PipeTransform } from '@angular/core';
import { skillNames } from '../rs.constants';

@Pipe({
    name: 'runeSkillIcon'
})
export class SkillIconPipe implements PipeTransform {
    
    public transform(value: number, ...args: any[]): any {
        return `skill-icon icon-${skillNames[ value ].toLowerCase()}`;
    }
    
}
