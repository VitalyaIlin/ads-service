import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { StartComponent } from '../start/start.component';
import { CreateAdComponent } from '../create-ad/create-ad.component';
import { AuthGuard } from '../auth.guard';
import { SelectedAddComponent } from '../selected-add/selected-add.component';
import { EditComponent } from '../edit/edit.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'edit', component: CreateAdComponent, canActivate: [AuthGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]},
  {path: ':id', component: SelectedAddComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
