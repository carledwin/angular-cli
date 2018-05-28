import { User } from './user';
import { Component } from '@angular/core';
//este e o decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//cria a aplicacao
export class AppComponent {
  title = 'First Angular CLI';
  titleH1 = "Tasks";
  
  user: User = {
    name: "Carl Edwin",
    age: 35
  }

  upperText ="Display uppercase text";
  lowerText ="Display lowercase text";
  percentValue: number = 0.5;
  date: Date = new Date();
  money: number = 500;
  profile: number = 0;
  isAdminp: boolean = true;
}
