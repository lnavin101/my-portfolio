import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selected = 'home';
  selectedSub = '';
  darkMode: boolean = false;

  constructor(private themeService: ThemeService){}

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

  switchTheme() {
    this.darkMode = !this.darkMode;
    this.themeService.switchTheme(this.darkMode ? 'bootstrap4-dark-blue': 'nova-accent');
  }

}
