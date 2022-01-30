import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

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
