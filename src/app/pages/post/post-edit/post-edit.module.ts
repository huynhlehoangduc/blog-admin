import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostEditRoutingModule } from './post-edit-routing.module';
import { PostEditComponent } from './post-edit.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconsProviderModule } from '../../../icons-provider.module';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    PostEditComponent
  ],
  imports: [
    CommonModule,
    PostEditRoutingModule,
    NzSpinModule,
    NzButtonModule,
    IconsProviderModule,
    NzPopconfirmModule,
    NzDividerModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzUploadModule,
    EditorModule,
  ]
})
export class PostEditModule { }
