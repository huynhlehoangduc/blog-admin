import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './@core/components/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './@core/components/admin-layout/admin-layout.module';
import { AdminGuard } from './@core/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [],
    canActivate: [AdminGuard]
  },
  { path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminLayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
