import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [InProgressComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InProgressComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
