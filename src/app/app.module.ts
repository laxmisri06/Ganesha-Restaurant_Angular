import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { AllviewmoredishesModule } from './components/allviewmoredishes/allviewmoredishes.module';
import { AllviewmoredishesComponent } from './components/allviewmoredishes/allviewmoredishes.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MaterialModule } from './components/material/material.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AllviewmoredishesComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    BreadcrumbsComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DashboardModule
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
