import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { InterestsComponent } from './interests/interests.component';

export const SkillsRoutes: Routes = [
    {
        path: 'skills',
        children: [
            { path: 'projects', component: ProjectsComponent },
            { path: 'interests', component: InterestsComponent },
            { path: '', redirectTo: 'projects', pathMatch: 'full'}
        ]
    }
];

