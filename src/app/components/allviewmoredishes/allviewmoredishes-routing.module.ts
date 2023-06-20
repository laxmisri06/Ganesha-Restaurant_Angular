import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllviewmoredishesComponent } from './allviewmoredishes.component';

const routes: Routes = [
  {
    path: '',
    component: AllviewmoredishesComponent
  }
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllviewmoredishesRoutingModule { }
