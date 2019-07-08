import { ICustomer } from './reducers';
import { Action } from '@ngrx/store';
 
export enum CustomersActionTypes {
    LoadCustomers = '[Customers] Load Customers',
    LoadFailedCustomers = '[Customers] Load Failed Customers',
    LoadedCustomers = '[Customers] Loaded Customers',
    DeleteCustomers = '[Customers] Delete Customers',
    IsCustomersLoaded = '[Customers] Is Customers Loaded'
}

export class LoadCustomers implements Action {
    readonly type = CustomersActionTypes.LoadCustomers;
}

export class LoadFailedCustomers implements Action {
    readonly type = CustomersActionTypes.LoadFailedCustomers;
    constructor(public payload: Object) {}
}

export class LoadedCustomers implements Action {
    readonly type = CustomersActionTypes.LoadedCustomers;
    constructor(public payload: Array<ICustomer>) {}
}

export class IsLoadedCustomers implements Action {
    readonly type = CustomersActionTypes.IsCustomersLoaded;
    constructor(public payload: boolean) {}
}

export class DeleteCustomers implements Action {
    readonly type = CustomersActionTypes.DeleteCustomers;
}

export type CustomerActions = 
    LoadCustomers       | 
    LoadedCustomers     |
    DeleteCustomers     | 
    IsLoadedCustomers   | 
    LoadFailedCustomers;
