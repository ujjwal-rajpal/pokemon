import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyMaterialModule
  ],
  exports: [
    FlexLayoutModule,
    MyMaterialModule
  ]
})
export class SharedModule { }
