import { Component, OnInit } from '@angular/core';
import { Certification } from '../shared/models/certification.model';
import { CertificationService } from '../shared/services/certification.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  certificationList: Certification[] = [];

  constructor(private certificationService: CertificationService) { }

  ngOnInit(): void {
    this.certificationService.getCertifications().subscribe(data=>{
      this.certificationList = data;
    })
  }

  openCert(url: string) {
    window.open(url);
  }

}
