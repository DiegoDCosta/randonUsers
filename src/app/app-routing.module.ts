import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', 
    loadChildren: 
      () => import('./pages/home/home.module')
      .then(m => m.HomeModule) 
    },
  { path: 'users', 
    loadChildren: 
      () => import('./pages/users/user-routing.module')
      .then(m => m.UserRoutingModule)
  },
  { 
    path: '**' ,
    component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
