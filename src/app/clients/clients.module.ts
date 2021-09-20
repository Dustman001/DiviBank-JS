import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientCreateComponent } from './create/create.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import { ClientListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ClientCreateComponent,
    ClientListComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ClientCreateComponent,
    ClientListComponent
  ]
})

export class ClientsModule { }
