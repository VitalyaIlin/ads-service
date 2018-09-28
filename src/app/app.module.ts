import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AddsComponent } from './adds/adds.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { StartComponent } from './start/start.component';
import { SelectedAddComponent } from './selected-add/selected-add.component';
import { EditComponent } from './edit/edit.component';







@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AddsComponent,
    CreateAdComponent,
    StartComponent,
    SelectedAddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
