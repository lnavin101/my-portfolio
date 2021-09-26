import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { SharedModule } from '../shared.module';
import { Interest } from '../models/interest.model';

@Injectable({
    providedIn: SharedModule,
  })
export class InterestService {

    constructor(private http: HttpClient) {}

    getInterests(): Observable<Interest[]>{
        return this.http.get<Interest[]>("assets/resources/Interests.json");
    }

}