import { Component, OnInit } from '@angular/core';
import { Achievement } from '../shared/models/achievement.model';
import { AchievementService } from '../shared/services/achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {

  achievementList: Achievement[] = [];

  constructor(private achievementService: AchievementService) { }

  ngOnInit(): void {
    this.achievementService.getAchievements().subscribe(data=>{
      this.achievementList = data;
    })
  }

}
