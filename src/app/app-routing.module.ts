import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';

const routes: Routes = [
  {
    path : 'activity',
    component : ActivityComponent
  },
  {
    path : '',
    component : ActivityComponent
  },


  {
    path: '**',
    redirectTo: 'activity',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
