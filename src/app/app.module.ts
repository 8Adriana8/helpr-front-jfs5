import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ComponentsModule } from './components/components.module';
import { ToastrModule } from 'ngx-toastr';

import { NgxMaskModule, IConfig } from 'ngx-mask'

import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule,
    ComponentsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      closeButton: true
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
