
import { NgModule ,ApplicationRef}       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { ProfileInfo }      from './profileInfo/profileInfo.component';
import { GymComponent }      from './gym/gym.component';
import { ExerciseListComponent }      from './exerciseList/exercise-List.component';
import { ExerciseDashboardComponent }      from './exerciseDashboard/exercise-dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GymComponent,
    ExerciseListComponent,
    ProfileInfo,
    ExerciseDashboardComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
