import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ClassroomService } from 'src/shared/services/classroom/classroom.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  saveNewclass$;

  constructor(public classrooomService: ClassroomService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    //this.saveNewclass$ = this.classrooomService.saveClass$();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

  }

  generateClassroomURL(event: string) {
    console.log("Entered pressed", event);
    // use a promise to send to seervice
    console.log(this.classrooomService.saveClass$(event));
    // this.classrooomService.saveClass$(event).then(res => {

    //   },
    //   (err: HttpErrorResponse) => {

    //   }
    // );


  }

}
