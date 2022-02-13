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

  chosenMemoji = '';
  memojiCollection = [
    "assets/images/navin1.png",
    "assets/images/navin2.png",
    "assets/images/navin3.png",
    "assets/images/navin5.png",
  ];

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // display spinner
    this.spinner.show();
    this.chooseMemoji();
  }

  ngAfterViewInit(){
    // hide spinner after content rendered
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  chooseMemoji(){
    this.chosenMemoji = this.memojiCollection[this.randomNum() - 1];
  }

  randomNum(){
    return Math.floor(Math.random() * ((this.memojiCollection.length) - 1 + 1)) + 1;
  }

}
