import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

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
    UsersComponent, 
    UserComponent, 
    PageNotFoundComponent, 
    LoginComponent, 
    TemplateDrivenFormComponent, 
    ReactiveFormComponent
    ],
  imports: [                  // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],              // Services
  bootstrap: [AppComponent]   // Component
})
export class AppModule { }
