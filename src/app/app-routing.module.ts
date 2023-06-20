import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { AllviewmoredishesComponent } from './components/allviewmoredishes/allviewmoredishes.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactusComponent } from './components/contactus/contactus.component';
/* import { DashboardComponent } from './components/dashboard/dashboard.component'; */


const routes: Routes = [
  { path: "", redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "dashboard", component: DashboardComponent },
  { path: "allviewmoredishes", component: AllviewmoredishesComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "**", component: NotfoundpageComponent },

]
  ;

/* const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/components/dashboard/dashboard.module').then(x => x.DashboardModule),
    data: { title: 'Dashboard' }
  },
  {
    path: 'Home',
    loadChildren: () => import('../app/components/home/home.module').then(x => x.HomeModule),
    data: { title: 'Home' }
  },
  {
    path: 'AboutUs',
    loadChildren: () => import('../app/components/aboutus/aboutus.module').then(x => x.AboutusModule),
    data: { title: 'About Ussss' }
  },
  {
    path: 'allviewmoredishes',
    loadChildren: () => import('../app/components/allviewmoredishes/allviewmoredishes.module').then(x => x.AllviewmoredishesModule),
    data: { title: 'Menu' }
  }
]; */


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }






