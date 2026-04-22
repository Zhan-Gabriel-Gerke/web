import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesComponent } from './components/dates/dates.component';

const routes: Routes = [
  { path: '', component: DatesComponent },
  { path: 'dates', component: DatesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
