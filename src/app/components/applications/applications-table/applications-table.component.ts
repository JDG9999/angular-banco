import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApplicationStatus } from 'src/app/models/enums/application-status';
import { ApiService } from 'src/app/services/api.service';
import { Application } from 'src/app/models/application';

@Component({
  selector: 'app-applications-table',
  templateUrl: './applications-table.component.html',
  styleUrls: ['./applications-table.component.scss']
})
export class ApplicationsTableComponent implements OnInit, OnDestroy {

  @Input() status: ApplicationStatus;
  applications: Application[];
  subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.applications = this.apiService.getApplications(this.status);
    this.subscription = this.apiService.applicationsChanged.subscribe(
      () => {
        this.applications = this.apiService.getApplications(this.status);
      }
    );
  }

  paymentPending() {
    return this.status === ApplicationStatus.APPROVED;
  }

  payLoan(application: Application) {
    this.apiService.payLoan(application);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
