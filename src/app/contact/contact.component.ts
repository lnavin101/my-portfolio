import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  // devCardUrl: string = "https://github.com/lnavin101/lnavin101/blob/eb728b8b4e192cac6972f68f7d869c12910df178/devcard.svg";
  devCardImg: any;

  constructor(private spinner: NgxSpinnerService, private readonly domSanitizer: DomSanitizer, private http: HttpClient) { }

  ngOnInit(): void {
    // display spinner
    this.spinner.show();
    this.getImage(window.location.origin + '/devcard').toPromise().then((data) => this.displayImage(data));
    //this.devCardImg = this.domSanitizer.bypassSecurityTrustUrl(window.location.origin + '/devcard');
  }

  ngAfterViewInit() {
    // hide spinner after content rendered
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

  getImage(imageUrl: string): Observable<any> {
    return this.http
      .get(imageUrl, { headers: { 'Accept': 'image/svg+xml' }, responseType: 'text' });
  }

  displayImage(image: any) {
    let base64string = btoa(image);
    this.devCardImg = this.domSanitizer.bypassSecurityTrustResourceUrl(
      `data:image/svg+xml;base64,${base64string}`
    );
  }

}
