import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { SharedModule } from '../shared.module';
import { Certification } from '../models/certification.model';

@Injectable({
    providedIn: SharedModule,
  })
export class CertificationService {

    constructor(private http: HttpClient) {}

    getCertifications(): Observable<Certification[]>{
        return this.http.get<Certification[]>("assets/resources/Certification.json");
    }

}