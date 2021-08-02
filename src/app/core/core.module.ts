import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './service/api.service';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports: [
    
  ],
  providers: [
    ApiService
  ]

})
export class CoreModule { }
