import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent }      from './gym/gym.component';
import { ProfileInfo }      from './profileInfo/profileInfo.component';
import { ExerciseListComponent }      from './exerciseList/exercise-List.component';
const routes: Routes = [
  { path: '', redirectTo: '/gym', pathMatch: 'full' },
  { path: 'gym',component: GymComponent },
  { path: 'profileInfo',component: ProfileInfo },
  { path: 'exerciseList',component: ExerciseListComponent },
  { path: 'exerciseDashboard',component: ExerciseListComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
