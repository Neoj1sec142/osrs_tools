import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AfkTimerComponent } from './components/tools/afk-timer/afk-timer.component';

const routes: Routes = [
  // Client Face
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'afk', component: AfkTimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
