import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { AllviewmoredishesComponent } from '../allviewmoredishes/allviewmoredishes.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';

/* const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "home",
        component: HomeComponent,
        data: { breadcrumb: {alias: 'home'} },
        children: [
          {
            path: "aboutus",
            component: AboutusComponent,
            data: { breadcrumb: {alias: 'aboutus'} },
            children: [
              {
                path: "menu",
                component: AllviewmoredishesComponent,
                data: {breadcrumb: {alias: 'menu'} },
              },
              {
                path: "contactus",
                component: ContactusComponent,
                data: {breadcrumb: {alias: 'ChildThree'} },
              },
            ],
          },
        ],
      },
    ],
  },
]; */

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
