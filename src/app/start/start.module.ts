import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { BrowserModule } from '@angular/platform-browser';
import { StartRoutingModule } from './start-routing.module';



@NgModule({
  declarations: [ StartComponent ],
  imports: [
    CommonModule,
    StartRoutingModule
  ],
  bootstrap: [ StartComponent ]
})
export class StartModule { }
