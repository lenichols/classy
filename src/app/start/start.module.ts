import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { BrowserModule } from '@angular/platform-browser';
import { StartRoutingModule } from './start-routing.module';
import { ClassroomService } from '../../shared/services/classroom/classroom.service';
import { NgxSpinnerService } from "ngx-spinner";


@NgModule({
  declarations: [ StartComponent ],
  imports: [
    CommonModule,
    StartRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ StartComponent ],
  providers: [ ClassroomService, NgxSpinnerService ]
})
export class StartModule { }
