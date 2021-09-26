import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [InProgressComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatExpansionModule
  ],
  exports: [
    InProgressComponent,
    PageNotFoundComponent,
    MatExpansionModule
  ]
})
export class SharedModule { }
