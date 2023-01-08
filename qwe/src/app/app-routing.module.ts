import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionGenerationComponent} from './question-generation/question-generation.component'
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import {CactivateGuard} from './cactivate.guard';
const routes: Routes = [

  { path: 'generate', component: QuestionGenerationComponent,canActivate:[CactivateGuard]},
  { path: 'home', component: HomeComponent,canActivate:[CactivateGuard] },
  { path: 'about', component: AboutComponent,canActivate:[CactivateGuard] },
  { path: 'contact', component: ContactComponent,canActivate:[CactivateGuard] },
  { path: 'thankyou', component: ThankyouComponent,canActivate:[CactivateGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
