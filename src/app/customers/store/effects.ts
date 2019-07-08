import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

// services
import { CustomersService } from '../service';

// actions
import * as customerActions from './actions';

@Injectable()
export class CustomersEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomersService) {}

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType(customerActions.CustomersActionTypes.LoadCustomers),
    switchMap(() => {
      return this.customerService
        .loadCustomers()
        .pipe(
          switchMap(customers => [
            new customerActions.LoadedCustomers(customers),
            new customerActions.IsLoadedCustomers(true)
          ]),
          catchError(error => of(new customerActions.LoadFailedCustomers(error)))
        )
    })
  );
}
