import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './clients/create/create.component';
import { ClientListComponent } from './clients/list/list.component';
import { LoansCreateComponent } from './loans/create/create.component';

const routes: Routes = [
  {path:'clients', component: ClientCreateComponent},
  {path:'loans', component:LoansCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
