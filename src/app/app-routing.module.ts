import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';

import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';

import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { ImagesComponent } from './images/images.component';
const routes: Routes = [
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'quiz-component',
    loadChildren: () =>
      import('./quiz-component/quiz-component.module').then(m => m.QuizComponentModule),
  },
  
    { path: 'contact', component: ContactFormComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'userinfo', component: UserinfoComponent },

    {path:'image',component:ImagesComponent,children:[
      {path:'upload',component:ImageComponent},
      {path:'list',component:ImageListComponent}
    ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
