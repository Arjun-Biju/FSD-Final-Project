import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.scss']
})
export class Session1Component {
  options: string[] = ['Java Developers', 'Sr PHP developer', 'AS400 Developers', 'Lead .Net Developers']; // Replace with your options
  selectedOptions: { [key: string]: boolean } = {};

  saveSelections() {
    const selected = Object.keys(this.selectedOptions).filter(option => this.selectedOptions[option]);
    // Here, you can save the selected options using a service, API call, or any other desired method
    console.log('Selected Options:', selected);
  }
}
