import { Component, OnInit } from '@angular/core';
import { Experience } from '../shared/models/experience.model';
import { ExperienceService } from '../shared/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  jobList: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(data=>{
      this.jobList = data;
    })
  }

}
