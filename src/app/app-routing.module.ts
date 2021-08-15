import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './@core/components/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './@core/components/admin-layout/admin-layout.module';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: []
  },
  { path: '404', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
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
