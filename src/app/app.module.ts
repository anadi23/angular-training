import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

//Decorator
@NgModule({
  declarations: [             // Components
    AppComponent, 
    SampleComponent, 
    TestingComponent, 
    BindingComponent, 
    DataComponent, 
    SalaryTaxPipe, ContactComponent, ContactsComponent, Testing222Component
  ],
  imports: [                  // Modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],              // Services
  bootstrap: [AppComponent]   // Component
})
export class AppModule { }
