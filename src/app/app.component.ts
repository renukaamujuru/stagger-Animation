import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { explainerAnim ,listAnimation,flyInOut} from './animations/index';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ explainerAnim ,listAnimation,flyInOut],

})
export class AppComponent {
  items = [];
  showDiv: boolean = true;
  constructor() {
    this.items = ['Hey this is an item', 'Here is another one', 'This is awesome'];
  }

  pushItem() {
    this.items.push('Oh yeah that is awesome');
  }
  removeItem() {
    this.items.pop();
  }
  toggleDiv() {
    this.showDiv = this.showDiv ? false : true;
  }
}
