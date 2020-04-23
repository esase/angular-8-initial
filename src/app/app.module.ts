import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { AppRootComponent } from './root';
import { AppRoutingModule } from './app-routing.module';

// services
import { PagesService } from './services/pages';
import { AuthService } from './services/auth';
import { RoutingGuardService } from './services/routing-guard';

// pages
import { Sample1Page } from './pages/sample1';
import { Sample2Page } from './pages/sample2';
import { GuestBookPage } from './pages/guest-book';
import { LoginPage } from './pages/login';

// pipes
import { UrlifyPipe } from './shared/pipes/urlify';

// shared components
import { FormatDateComponent } from './shared/components/format-date';

// shared directives
import { AutoSizeDirective } from './shared/directives/auto-size';
import { GraphQLModule } from './graphql.module';

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        AppRootComponent,
        Sample1Page,
        Sample2Page,
        GuestBookPage,
        LoginPage,
        UrlifyPipe,
        FormatDateComponent,
        AutoSizeDirective
    ],
    imports: [
        StoreModule.forRoot({
        }),
        StoreDevtoolsModule.instrument({ 
            maxAge: 25, 
            logOnly: environment.production 
        }),
        EffectsModule.forRoot([]),
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                headerName: 'jwt'
            }
        }),
        GraphQLModule
    ],
    providers: [
        PagesService,
        AuthService,
        RoutingGuardService
    ],
    bootstrap: [AppRootComponent]
})
export class AppModule { }
