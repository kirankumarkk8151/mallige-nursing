import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BscComponent } from './components/courses/bsc/bsc.component';
import { MscComponent } from './components/courses/msc/msc.component';
import { DiplomoComponent } from './components/courses/diplomo/diplomo.component';
import { BannerComponent } from './components/banner/banner.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { PlacementComponent } from './components/placement/placement.component';
import { ContactComponent } from './components/contact/contact.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { ChairmanComponent } from './components/messages/chairman/chairman.component';
import { CeoComponent } from './components/messages/ceo/ceo.component';
import { SecretaryComponent } from './components/messages/secretary/secretary.component';
import { DirectorComponent } from './components/messages/director/director.component';
import { PrincipalComponent } from './components/messages/principal/principal.component';
import { AffiliationsComponent } from './components/affiliations/affiliations.component';
import { ClinicalComponent } from './components/facilities/clinical/clinical.component';
import { LabComponent } from './components/facilities/lab/lab.component';
import { LibraryComponent } from './components/facilities/library/library.component';
import { HostelComponent } from './components/facilities/hostel/hostel.component';
import { CanteenComponent } from './components/facilities/canteen/canteen.component';
import { TransportationComponent } from './components/facilities/transportation/transportation.component';
import { SportsComponent } from './components/facilities/sports/sports.component';
import { CcactivitiesComponent } from './components/studentscorner/ccactivities/ccactivities.component';
import { NriComponent } from './components/studentscorner/nri/nri.component';
import { AchivementsComponent } from './components/studentscorner/achivements/achivements.component';
import { TestimonalsComponent } from './components/studentscorner/testimonals/testimonals.component';
import { AlumniComponent } from './components/studentscorner/alumni/alumni.component';
import { ApplyComponent } from './components/apply/apply.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BscComponent,
    MscComponent,
    DiplomoComponent,
    BannerComponent,
    FacultyComponent,
    AdmissionComponent,
    PlacementComponent,
    ContactComponent,
    GallaryComponent,
    ChairmanComponent,
    CeoComponent,
    SecretaryComponent,
    DirectorComponent,
    PrincipalComponent,
    AffiliationsComponent,
    ClinicalComponent,
    LabComponent,
    LibraryComponent,
    HostelComponent,
    CanteenComponent,
    TransportationComponent,
    SportsComponent,
    CcactivitiesComponent,
    NriComponent,
    AchivementsComponent,
    TestimonalsComponent,
    AlumniComponent,
    ApplyComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   FormsModule,
   ReactiveFormsModule,

   
  

  ],
  providers:  [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
