import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { NewTravelblogComponent } from './new-travelblog/new-travelblog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TravelblogDetailComponent } from './travelblog-detail/travelblog-detail.component';
import { TravelblogsComponent } from './travelblogs/travelblogs.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'travelblogs', component: TravelblogsComponent },
  { path: 'travelblog/new', component: NewTravelblogComponent },
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
