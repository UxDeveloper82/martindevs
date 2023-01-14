import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { CreateProjectComponent } from './admin/components/projects/create-project/create-project.component';
import { ProjectsListComponent } from './admin/components/projects/projects-list/projects-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { HomePageComponent } from './shared/components/home-page/home-page.component';
import { ProjectDetailsComponent } from './shared/components/project-details/project-details.component';
import { VideosComponent } from './shared/components/videos/videos.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'message-page',
    loadChildren: () => import('./admin/admin.module').then(m =>m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'projects-list', component: ProjectsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-project',
    component: CreateProjectComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-panel',
    component: AdminpanelComponent,
    canActivate: [AuthGuard],
  },
  { path: 'videos', component: VideosComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: HomePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
