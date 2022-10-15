import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { Project1Component } from './project1/project1.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'documentation/project1', component: Project1Component},
  // {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
