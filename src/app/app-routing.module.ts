import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { FormRouteGuardService } from './services/form-route-guard.service';
import { LoginRouteGuardService } from './services/login-route-guard.service';

const routes: Routes = [
  {path: '', component: BindingComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'tdf', component: TemplateDrivenFormComponent},
  {path: 'rf', component: ReactiveFormComponent, canDeactivate: [FormRouteGuardService]},
  {path: 'users', component: UsersComponent, canActivate: [LoginRouteGuardService]},
  {path: 'users/:id', component: UserComponent, canActivate: [LoginRouteGuardService]},
  {path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
