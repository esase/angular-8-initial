import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerTestComponent } from './customer-test/customer-test.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  { path: '', component: CustomerTestComponent },
  { path: 'test', component: CustomerListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
