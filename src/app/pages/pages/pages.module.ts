import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
