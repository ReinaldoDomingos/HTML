import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AdminLinkDirective } from './admin-link.directive';
import { AdminModule } from './admin/admin.module';
import { ConvertToEuroPipe } from './convert-to-euro.pipe';
import { BackendApiService } from './backend-api.service';

//import { APP_ROUTER_PROVIDERS } from './app-routes';
// import { HTTP_PROVIDERS } from '@angular/http';
// import { HttpUtilService } from './services/http-util-service';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AdminLinkDirective,
    ConvertToEuroPipe
  ],
  imports: [
    BrowserModule,
    AdminModule
  ],
  providers: [ApiService, BackendApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
