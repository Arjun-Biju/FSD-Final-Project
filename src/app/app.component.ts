import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Learntos2';
  showPopUp: boolean = false;

  onShowPopupChange(value: boolean) {
    this.showPopUp = value;
  }
}
