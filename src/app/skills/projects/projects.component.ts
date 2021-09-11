import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  panelOpenState = true;
  projectList: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data=>{
      this.projectList = data;
    });
  }

}
