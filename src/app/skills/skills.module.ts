import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills.component';
import { SharedModule } from '../shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SafePipe } from '../shared/pipes/safe.pipe';

@NgModule({
  declarations: [
    SkillsComponent, 
    ProjectsComponent,
    InterestsComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
