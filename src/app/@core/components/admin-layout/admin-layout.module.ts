import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from '../../../icons-provider.module';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
    IconsProviderModule,
  ]
})
export class AdminLayoutModule { }
