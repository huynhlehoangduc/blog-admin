import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleLogPipe } from './console-log.pipe';



@NgModule({
  declarations: [
    ConsoleLogPipe
  ],
  exports: [
    ConsoleLogPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ConsoleLogModule { }
