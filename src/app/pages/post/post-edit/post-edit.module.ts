import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostEditRoutingModule } from './post-edit-routing.module';
import { PostEditComponent } from './post-edit.component';


@NgModule({
  declarations: [
    PostEditComponent
  ],
  imports: [
    CommonModule,
    PostEditRoutingModule
  ]
})
export class PostEditModule { }
