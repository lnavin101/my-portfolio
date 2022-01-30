import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('play', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('stop', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('play => stop', [
        animate('1s')
      ]),
      transition('stop => play', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // display spinner
    this.spinner.show();
  }

  ngAfterViewInit(){
    // hide spinner after content rendered
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

}
