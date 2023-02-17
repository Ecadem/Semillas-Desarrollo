import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialsModule } from '../materials/materials.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    AppRoutingModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class SharedModule { }
