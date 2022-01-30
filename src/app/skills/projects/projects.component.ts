import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProjectService } from '../../shared/services/project.service';
import { Project } from '../../shared/models/project.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  panelOpenState = true;
  projectList: Project[] = [];

  constructor(private projectService: ProjectService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // display spinner
    this.spinner.show();
    
    this.projectService.getProjects().subscribe(data=>{
      this.projectList = data;
    });
  }

  ngAfterViewInit(){
    // hide spinner after content rendered
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

}
