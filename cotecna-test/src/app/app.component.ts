import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cotecna-test';
  selectmonth:number;
  selectyear:number
  
  onMonthChange(selectedMonth:number){
    this.selectmonth= 1;
    console.log("SELECTED MONTH CHANGE 2:",  this.selectmonth)
  }
}
