import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelblogsComponent } from './travelblogs/travelblogs.component';
import { TravelblogDetailComponent } from './travelblog-detail/travelblog-detail.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelblogsComponent,
    TravelblogDetailComponent,
    MyBlogsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
