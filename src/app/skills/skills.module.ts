import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SkillsComponent, ProjectsComponent, InterestsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
