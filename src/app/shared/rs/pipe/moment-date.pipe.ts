import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'runeMomentDate'
})
export class MomentDatePipe implements PipeTransform {
    
    public transform(value: moment.Moment, format?: string): any {
        return value.format(format);
    }
    
}
