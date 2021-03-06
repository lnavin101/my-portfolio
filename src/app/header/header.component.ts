import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selected = 'home';
  selectedSub = '';

  constructor(){}

  ngOnInit(): void {
    this.appendClass();
  }

  selectMenu(path: string){
    this.selected = path;
  }

  selectSubMenu(subPath: string){
    this.selectedSub = subPath;
  }

  appendClass(){
    return 'navbar-expand-md'
  }

}
