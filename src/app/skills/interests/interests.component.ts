import { Component, OnInit } from '@angular/core';
import { InterestService } from '../../shared/services/interest.service';
import { Interest } from '../../shared/models/interest.model';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  designList: Interest[] = [];
  videoList: Interest[] = [];

  constructor(private interestService: InterestService){}

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
      this.designs = this.chunk(this.designList, 3);
      this.videos = this.chunk(this.videoList, 2);
    });
  }

}
