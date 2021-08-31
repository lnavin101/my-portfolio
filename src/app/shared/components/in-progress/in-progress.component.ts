import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit, OnDestroy {

  onDisplay: boolean = false;
  tick = 9;
  interval = interval(1000);
  timer = timer(9000)
  timerSubscription: Subscription = new Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.timerSubscription = this.interval.pipe(takeUntil(this.timer)).subscribe(t=>{
      this.onTick(t);
    },err=>{},()=>{ this.redirectPage() })
  }

  onTick(tick: any){
    this.tick -= 1;

    if(this.tick <= 5)
      this.onDisplay = true;

  }

  redirectPage(){
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
