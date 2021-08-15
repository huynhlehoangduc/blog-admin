import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostListRoutingModule } from './post-list-routing.module';
import { PostListComponent } from './post-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconsProviderModule } from '../../../icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzImageModule } from 'ng-zorro-antd/image';
import { TruncateModule } from '../../../@core/pipes/truncate/truncate.module';


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    PostListRoutingModule,
    NzButtonModule,
    IconsProviderModule,
    NzTableModule,
    NzPopconfirmModule,
    NzImageModule,
    TruncateModule
  ]
})
export class PostListModule { }
