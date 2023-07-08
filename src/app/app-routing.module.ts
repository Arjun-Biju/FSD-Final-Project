import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { Session1Component } from './session1/session1.component';

const routes: Routes = [{path:'Home', component: BlogsComponent}, {path:'', redirectTo: 'Home', pathMatch: 'full'}, {path:'Home', component: Session1Component }, {path:'', redirectTo: 'Home', pathMatch: 'full'} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
