import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: UserDetailComponent },
]


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService // Adicione o serviço ao array de providers
  ],
  declarations: []
})
export class UsersModule { }
