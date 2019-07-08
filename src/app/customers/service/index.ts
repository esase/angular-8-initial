import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    /**
     * Constructor
     */
    constructor(private http: HttpClient) {}

    /**
     * Load page
     */
    loadCustomers(): Observable<any> {
        return this.http.get<any>(`/assets/pages/customers.json`);
    }
}
