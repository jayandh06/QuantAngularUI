import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public symbol: string;
  public startDate: string;
  public endDate: string;
  
  title = 'Algoz India';
}
