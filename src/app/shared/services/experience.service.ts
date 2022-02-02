import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { SharedModule } from '../shared.module';
import { Experience } from '../models/experience.model';

@Injectable({
    providedIn: SharedModule,
  })
export class ExperienceService {

    constructor(private http: HttpClient) {}

    getExperience(): Observable<Experience[]>{
        return this.http.get<Experience[]>("assets/resources/Experience.json");
    }

}