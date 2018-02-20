import { Component, OnInit } from '@angular/core';
import { explainerAnim } from '../animations/index';
@Component({
  selector: 'app-myrides',
  templateUrl: './myrides.component.html',
  styleUrls: ['./myrides.component.css'],
   animations: [ explainerAnim]
})
export class MyridesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
