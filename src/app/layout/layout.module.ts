import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { PageLoaderComponent } from './page-loader/page-loader.component';




@NgModule({
  
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NavbarModule,
    WavesModule, 
    ButtonsModule,

  ]
})
export class LayoutModule { }
