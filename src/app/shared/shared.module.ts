import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AdminpanelComponent } from '../admin/adminpanel/adminpanel.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomePageComponent,
    NavComponent,
    VideosComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    CarouselModule,
    TabsModule,
    FooterComponent,
    HomePageComponent,
    NavComponent,
    VideosComponent,
    ContactComponent
  ]
})
export class SharedModule { }
