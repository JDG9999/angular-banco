import { Component, OnInit } from '@angular/core';
import { ApplicationStatus } from 'src/app/models/enums/application-status';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applicationStatus = ApplicationStatus;

  constructor() { }

  ngOnInit() {
  }

}
