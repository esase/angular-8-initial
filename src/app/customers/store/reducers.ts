import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as customerActions from './actions';

export interface ICustomer {
    name: string
}

export interface ICustomerState {
    isLoaded: boolean;
    customers: Array<ICustomer>;
}

export const initialState: ICustomerState = {
    isLoaded: false,
    customers: []
};

// reducer
export function customersReducer(state = initialState, action: customerActions.CustomerActions): ICustomerState {
    switch (action.type) {
        case customerActions.CustomersActionTypes.DeleteCustomers:
            return {
                ...state,
                customers: []
            };

        case customerActions.CustomersActionTypes.IsCustomersLoaded:
            return {
                ...state,
                isLoaded: action.payload
            };

        case customerActions.CustomersActionTypes.LoadedCustomers:
            return {
                ...state,
                customers: action.payload
            };
 
      default:
        return state;
    }
  }

// selectors
export const getCustomerState = createFeatureSelector<ICustomerState>('customers');

export const selectCustomers = createSelector(
    getCustomerState,
    (state: ICustomerState) => state.customers
  );

  export const selectIsLoaded = createSelector(
    getCustomerState,
    (state: ICustomerState) => state.isLoaded
  );
