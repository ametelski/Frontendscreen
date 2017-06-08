import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdGridListModule, MdIconModule,
  MdMenuModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdMenuModule,
  ]
})

export class MaterialModule { }
