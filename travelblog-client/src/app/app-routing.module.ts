import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TravelblogDetailComponent } from './travelblog-detail/travelblog-detail.component';
import { TravelblogsComponent } from './travelblogs/travelblogs.component';

const routes: Routes = [
  { path: 'travelblogs', component: TravelblogsComponent },
  { path: 'travelblog/:id', component: TravelblogDetailComponent },
  { path: 'my-blogs', component:  MyBlogsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
