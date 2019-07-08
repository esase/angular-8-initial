import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// store
import * as customersActions from '../store/actions';
import * as customersReducers from '../store/reducers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {
  customersLoading$: Observable<boolean>;
  customers$: Observable<Array<customersReducers.ICustomer>>;

  /**
   * Constructor
   */
  constructor(private store: Store<customersReducers.ICustomerState>) {
    this.customersLoading$ = this.store.pipe(select(customersReducers.selectIsLoaded));
    this.customers$ = this.store.pipe(select(customersReducers.selectCustomers));
  }

  /**
   * Component init
   */
  ngOnInit() {
    this.store.dispatch(new customersActions.LoadCustomers);
  }
  
  /**
   * Clear customers
   */
  delete() {
    this.store.dispatch(new customersActions.DeleteCustomers);
  }
}
