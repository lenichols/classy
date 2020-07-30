import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ClassroomComponent } from './classroom/classroom.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start.module').then(m => m.StartModule),
  },
  {
    path: 'classroom/:title',
    loadChildren: () => import('./classroom/classroom.module').then(m => m.ClassroomModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
