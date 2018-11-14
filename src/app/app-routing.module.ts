import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* pages */
import { HomeComponent } from './pages/home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports: [RouterModule]
})

export class APP_ROUTING { usehash: true }




