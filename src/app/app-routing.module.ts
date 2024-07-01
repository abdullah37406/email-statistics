import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SendEmailComponent } from './components/send-email/send-email.component';

const routes: Routes = [
  { path: '', component: SendEmailComponent }, 
  { path: 'send-email', component: DashboardComponent }, 
  { path: '**', component: SendEmailComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
