import {CalendarDayComponent} from './calendar-day.component';
import * as moment from 'moment';

describe ('isNextFiveDays', ()=>{
    
    it('should return true if day is in the next five days ', ()=>{
        let component = new CalendarDayComponent(null);
        let day  = moment().add(2,'day');
        const result = component.isNextFiveDays(day);
        expect(result).toBe(true);
      });
  
      it('should return false if day is not in next five days ', ()=>{
        let component = new CalendarDayComponent(null);
        let day = moment().subtract(1,'day');
        const result = component.isNextFiveDays(day);
        expect(result).toBe(false);
      });
    
});