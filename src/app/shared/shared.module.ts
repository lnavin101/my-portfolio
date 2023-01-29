import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { SafePipe } from './pipes/safe.pipe';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [InProgressComponent, PageNotFoundComponent, SafePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    MatExpansionModule,
    NgxSpinnerModule,
    HttpClientModule,
    SplitterModule,
    ButtonModule,
    MegaMenuModule
  ],
  exports: [
    InProgressComponent,
    PageNotFoundComponent,
    MatExpansionModule,
    NgxSpinnerModule,
    SafePipe,
    HttpClientModule,
    SplitterModule,
    ButtonModule,
    MegaMenuModule
  ]
})
export class SharedModule { }
