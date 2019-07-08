import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { customersReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './store/effects';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerTestComponent } from './customer-test/customer-test.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerTestComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', customersReducer),
    EffectsModule.forFeature([CustomersEffects])
  ]
})
export class CustomersModule { }
