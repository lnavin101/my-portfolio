import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { InterestService } from '../../shared/services/interest.service';
import { Interest } from '../../shared/models/interest.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit, AfterViewInit {
  @ViewChild('videoCarousel', {static: false}) videoCarousel: any;
  @ViewChild('designCarousel', {static: false}) designCarousel: any;

  imgAnimation = 'none';
  screenWidth: number = 0;
  designList: Interest[] = [];
  videoList: Interest[] = [];

  constructor(private interestService: InterestService, private spinner: NgxSpinnerService){
    this.getScreenSize();
  }

  designs: any = [[]];
  videos: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    // display spinner
    this.spinner.show();

    this.interestService.getInterests().subscribe(data=>{
      this.designList = data.filter(data=>{return data.type === 'design'});
      this.videoList = data.filter(data=>{return data.type === 'video'});

      if(this.screenWidth <= 600){
        this.imgAnimation = 'fade';
        this.designs = this.chunk(this.designList, 1);
        this.videos = this.chunk(this.videoList, 1);
      }
      else if(this.screenWidth > 600 && this.screenWidth <=900){
        this.imgAnimation = 'fade';
        this.designs = this.chunk(this.designList, 3);
        this.videos = this.chunk(this.videoList, 2);
      }
      else{
        this.imgAnimation = 'none';
        this.designs = this.chunk(this.designList, 4);
        this.videos = this.chunk(this.videoList, 2);
      }

    });
  }

  ngAfterViewInit(){
    // hide spinner after content rendered
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {

     if(window.innerWidth != this.screenWidth)
      this.ngOnInit();

    this.screenWidth = window.innerWidth;
  }

  nextVideo(){
    this.videoCarousel.nextSlide();
  }

  prevVideo(){
    this.videoCarousel.previousSlide();
  }

  nextImage(){
    this.designCarousel.nextSlide();
  }

  prevImage(){
    this.designCarousel.previousSlide();
  }

}
