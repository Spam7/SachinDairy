import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { ReportModule } from './report/report.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BillingModule } from './billing/billing.module';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    ReportModule,
    SharedModule,
    BillingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
    ]),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
