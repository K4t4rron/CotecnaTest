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
  
  onMonthChange(event){
    this.selectmonth= event.target.value;
    console.log("SELECTED MONTH CHANGE 2:",  this.selectmonth)
  }

  onYearChange(event){
    this.selectyear = event.target.value;
    console.log("SELECECTED YEAR CHANGED TO: ", this.selectyear);
  }
  
}
