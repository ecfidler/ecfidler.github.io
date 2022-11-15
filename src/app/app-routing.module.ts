import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'documentation/project1', component: Project1Component},
  {path: 'documentation/project2', component: Project2Component},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
