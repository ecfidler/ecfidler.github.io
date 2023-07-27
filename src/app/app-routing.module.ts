import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DocumentationComponent } from './documentation/documentation.component';
import { UiHomeComponent } from './documentation/ui-home/ui-home.component';
import { Project1Component } from './documentation/project1/project1.component';
import { Project2Component } from './documentation/project2/project2.component';
import { Project3Component } from './documentation/project3/project3.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'documentation', component: DocumentationComponent, children: 
  [
    {path: '', component: UiHomeComponent},
    {path: 'project1', component: Project1Component},
    {path: 'project2', component: Project2Component},
    {path: 'project3', component: Project3Component},
  ]},
  
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
