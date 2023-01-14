import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarPageComponent } from './components/sidebar-page/sidebar-page.component';
import { MessagePageComponent } from './components/message-page/message-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component';
import { CreateProjectComponent } from './components/projects/create-project/create-project.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';


@NgModule({
  declarations: [
    SidebarPageComponent,
    MessagePageComponent,
    ProjectsListComponent,
    CreateProjectComponent,
    AdminpanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
