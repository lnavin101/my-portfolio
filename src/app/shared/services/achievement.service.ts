import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { SharedModule } from '../shared.module';
import { Achievement } from '../models/achievement.model';

@Injectable({
    providedIn: SharedModule,
  })
export class AchievementService {

    constructor(private http: HttpClient) {}

    getAchievements(): Observable<Achievement[]>{
        return this.http.get<Achievement[]>("assets/resources/Achievement.json");
    }

}