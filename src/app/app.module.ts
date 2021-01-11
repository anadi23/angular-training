import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { TestingComponent } from './components/testing/testing.component';
import { BindingComponent } from './components/binding/binding.component';
import { DataComponent } from './components/data/data.component';
import { SalaryTaxPipe } from './pipe/salary-tax.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { Testing222Component } from './components/testing222/testing222.component';
import { Testing223Component } from './components/testing223/testing223.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Decorator
@NgModule({
  declarations: [             // Components
    AppComponent, 
    SampleComponent, 
    TestingComponent, 
    BindingComponent, 
    DataComponent, 
    SalaryTaxPipe, 
    ContactComponent, 
    ContactsComponent, 
    Testing222Component, 
    Testing223Component, 
    UsersComponent, UserComponent, PageNotFoundComponent
  ],
  imports: [                  // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],              // Services
  bootstrap: [AppComponent]   // Component
})
export class AppModule { }
