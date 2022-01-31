import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing-page/home.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
