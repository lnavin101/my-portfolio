import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { SharedModule } from '../shared.module';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: SharedModule,
  })
export class ProjectService {

    constructor(private http: HttpClient) {}

    getProjects(): Observable<Project[]>{
        return this.http.get<Project[]>("assets/resources/Projects.json");
    }

}