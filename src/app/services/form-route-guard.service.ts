import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveFormComponent } from '../components/reactive-form/reactive-form.component';

@Injectable({
  providedIn: 'root'
})
export class FormRouteGuardService implements CanDeactivate<ReactiveFormComponent> {

  constructor() { }
  canDeactivate(rform: ReactiveFormComponent){
    if(rform.form.dirty)
      return confirm("Are you sure to leave this form incomplete?");
    
    return true;
  }
}
