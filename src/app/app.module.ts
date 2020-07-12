import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditValueComponent } from './components/credit-value/credit-value.component';
import { CreditFormComponent } from './components/credit-form/credit-form.component';
import { BankCapitalComponent } from './components/bank-capital/bank-capital.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { IndexComponent } from './components/index/index.component';
import { UsersComponent } from './components/users/users.component';
import { UserHistoryComponent } from './components/users/user-history/user-history.component';
import { CreditApprovalMessageComponent } from './components/credit-approval-message/credit-approval-message.component';
import { ApplicationsTableComponent } from './components/applications/applications-table/applications-table.component';

registerLocaleData(localeEs, 'es');
defineLocale('es', esLocale);

@NgModule({
  declarations: [
    AppComponent,
    CreditValueComponent,
    CreditFormComponent,
    BankCapitalComponent,
    ApplicationsComponent,
    IndexComponent,
    UsersComponent,
    UserHistoryComponent,
    CreditApprovalMessageComponent,
    ApplicationsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  entryComponents: [CreditApprovalMessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
