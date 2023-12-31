import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SecureModule} from "./secure/secure.module";
import {PublicModule} from "./public/public.module";
import { NgChartsModule } from 'ng2-charts';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FooterModule} from "./components/layout/footer/footer.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CredentialInterceptor} from "./interceptor/credential.interceptor";
import {AuthGuard} from "./guard/auth.guard";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SecureModule,
        PublicModule,
        SweetAlert2Module.forRoot(),
        NgChartsModule,
        NgbModule,
        FooterModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CredentialInterceptor,
            multi: true,
        },
        AuthGuard,
    ],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
