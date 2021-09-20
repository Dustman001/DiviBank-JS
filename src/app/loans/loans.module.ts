import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansCreateComponent } from './create/create.component';
import { LoansListComponent } from './list/list.component';



@NgModule({
  declarations: [
    LoansCreateComponent,
    LoansListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoansCreateComponent,
    LoansListComponent
  ]
})
export class LoansModule { }
