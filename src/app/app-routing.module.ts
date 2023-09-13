import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AboutComponent } from './components/about/about.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { ContactComponent } from './components/contact/contact.component';
import { BscComponent } from './components/courses/bsc/bsc.component';
import { DiplomoComponent } from './components/courses/diplomo/diplomo.component';
import { MscComponent } from './components/courses/msc/msc.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { GallaryComponent } from './components/gallary/gallary.component';
import { HomeComponent } from './components/home/home.component';
import { PlacementComponent } from './components/placement/placement.component';
import { ChairmanComponent } from './components/messages/chairman/chairman.component';
import { CeoComponent } from './components/messages/ceo/ceo.component';
import { DirectorComponent } from './components/messages/director/director.component';
import { SecretaryComponent } from './components/messages/secretary/secretary.component';
import { PrincipalComponent } from './components/messages/principal/principal.component';
import { AffiliationsComponent } from './components/affiliations/affiliations.component';
import { ClinicalComponent } from './components/facilities/clinical/clinical.component';
import { LabComponent } from './components/facilities/lab/lab.component';
import { HostelComponent } from './components/facilities/hostel/hostel.component';
import { LibraryComponent } from './components/facilities/library/library.component';
import { TransportationComponent } from './components/facilities/transportation/transportation.component';
import { CanteenComponent } from './components/facilities/canteen/canteen.component';
import { SportsComponent } from './components/facilities/sports/sports.component';
import { CcactivitiesComponent } from './components/studentscorner/ccactivities/ccactivities.component';
import { NriComponent } from './components/studentscorner/nri/nri.component';
import { AchivementsComponent } from './components/studentscorner/achivements/achivements.component';
import { TestimonalsComponent } from './components/studentscorner/testimonals/testimonals.component';
import { AlumniComponent } from './components/studentscorner/alumni/alumni.component';
import { ApplyComponent } from './components/apply/apply.component';
import { LoginComponent } from './components/admin/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';

const routes: Routes = [
  {
    component:HomeComponent,path:""
  },
  
  {
    component:AboutComponent,path:"about"
  },
  {
    component:BscComponent,path:"bsc"
  },
  {
    component:MscComponent,path:"msc"
  },
  {
    component:DiplomoComponent,path:"diplomo"
  },
  {
    component:FacultyComponent,path:"faculty"
  },
  {
    component:AdmissionComponent,path:"admission"
  },
  {
    component:PlacementComponent,path:"placement"
  },
  {
    component:ContactComponent,path:"contactUs"
  },
  {
    component:GallaryComponent,path:"gallary"
  },
  {
    component:ChairmanComponent,path:"chairman"
  },
  {
    component:CeoComponent,path:"ceo"
  },
  {
    component:DirectorComponent,path:"director"
  },
  {
    component:SecretaryComponent,path:"secretary"
  },
  {
    component:PrincipalComponent,path:"principal"
  },
  {
    component:AffiliationsComponent,path:"affiliations"
  },
  {
    component:ClinicalComponent,path:"clinical"
  },
  {
    component:LabComponent,path:"laboratory"
  },
  {
    component:HostelComponent,path:"hostel"
  },
  {
    component:LibraryComponent,path:"library"
  },
  {
    component:TransportationComponent,path:"transportation"
  },
  {
    component:ChairmanComponent,path:"chairman"
  },
  {
    component:CanteenComponent,path:"canteen"
  },
  {
    component:SportsComponent,path:"sports"
  },
  {
    component:CcactivitiesComponent,path:"co-curricular"
  },
  {
    component:NriComponent,path:"nri"
  },
  {
    component:AchivementsComponent,path:"achivements"
  },
  {
    component:TestimonalsComponent,path:"testimonals"
  },
  {
    component:AlumniComponent,path:"alumni"
  },
  {
    component:CcactivitiesComponent,path:"co-curricular"
  },
  {
    component:ApplyComponent,path:"apply"
  },
  {
    component:LoginComponent,path:"login"
  },
  {
    component:DashboardComponent,path:"dashboard"
  },
  {
    component:SidebarComponent,path:"sidebar"
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'}),
    
  ScrollingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
