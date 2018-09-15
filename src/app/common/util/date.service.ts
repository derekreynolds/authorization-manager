import { Injectable } from '@angular/core';

import { Moment } from 'moment';

@Injectable()
export class DateService {

  	constructor() { }

  	findNextWorkDay(date: Moment): Moment {
  		
  		let nextWorkingDate = date.clone();

  		do {
			nextWorkingDate = nextWorkingDate.add(1, 'days');
  		} while(this.isMandatoryHoliday(nextWorkingDate) || this.isWeekend(nextWorkingDate))

  		return nextWorkingDate;
  	}

  	/**
  	 * Test if the date fall on thw weekend.
  	 * @param  {Moment}  date the date to test.
  	 * @return {boolean}   true if is the weekend.
  	 */
  	isWeekend(date: Moment): boolean {
  		const day = date.day();
	    // Prevent Saturday and Sunday from being selected.
	    return day === 0 || day === 6;
  	}

  	isMandatoryHoliday(date: Moment): boolean {
  		return false;
  	}
}
