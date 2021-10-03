import { Component, OnInit, HostListener } from '@angular/core';
import { InterestService } from '../../shared/services/interest.service';
import { Interest } from '../../shared/models/interest.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  imgAnimation = 'slide';
  screenWidth: number = 0;
  designList: Interest[] = [];
  videoList: Interest[] = [];

  constructor(private interestService: InterestService){
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
    this.interestService.getInterests().subscribe(data=>{
      this.designList = data.filter(data=>{return data.type === 'design'});
      this.videoList = data.filter(data=>{return data.type === 'video'});

      if(this.screenWidth <= 320){
        this.imgAnimation = 'fade';
        this.designs = this.chunk(this.designList, 1);
        this.videos = this.chunk(this.videoList, 1);
      }
      else if(this.screenWidth >320 && this.screenWidth <=600){
        this.imgAnimation = 'slide';
        this.designs = this.chunk(this.designList, 2);
        this.videos = this.chunk(this.videoList, 2);
      }
      else if(this.screenWidth > 600 && this.screenWidth <=900){
        this.imgAnimation = 'slide';
        this.designs = this.chunk(this.designList, 2);
        this.videos = this.chunk(this.videoList, 2);
      }
      else{
        this.imgAnimation = 'none';
        this.designs = this.chunk(this.designList, 3);
        this.videos = this.chunk(this.videoList, 2);
      }
      
    });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {

     if(window.innerWidth != this.screenWidth)
      this.ngOnInit();

    this.screenWidth = window.innerWidth;
  }

}
