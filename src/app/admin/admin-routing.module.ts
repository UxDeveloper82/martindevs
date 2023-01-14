import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { MessagePageComponent } from './components/message-page/message-page.component';
import { CreateProjectComponent } from './components/projects/create-project/create-project.component';
import { ProjectsListComponent } from './components/projects/projects-list/projects-list.component';

const routes: Routes = [
   {path:"", component: MessagePageComponent},
   {path:"", component: ProjectsListComponent},
   {path:"",component: CreateProjectComponent},
   {path:"", component: AdminpanelComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
