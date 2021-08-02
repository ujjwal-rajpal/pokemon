import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMaterialModule } from './material.module';
import { DefaultImagePipe } from './default-image.pipe';



@NgModule({
  declarations: [DefaultImagePipe],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MyMaterialModule
  ],
  exports: [
    FlexLayoutModule,
    MyMaterialModule,
    DefaultImagePipe
  ]
})
export class SharedModule { }
