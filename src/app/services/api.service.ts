import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Application } from '../models/application';
import { ApplicationStatus } from '../models/enums/application-status';
import { Subject } from 'rxjs';
import { UtilService } from './util.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: User[];
  applications: Application[];

  applicationsChanged = new Subject<void>();

  constructor(private http: HttpClient, private utilService: UtilService) { }

  fetchData() {
    const userA = new User('Juan', '123', 'a@mail');
    const userB = new User('Pedro', '456', 'b@mail');
    const userC = new User('Andrés', '789', 'c@mail');
    this.users = [
      userA, userB, userC
    ];
    this.applications = [
      new Application(userA, 15000, new Date('2020-07-31'), true, false),
      new Application(userA, 23000, new Date('2020-07-31'), true, true),
      new Application(userB, 30000, new Date('2020-07-31'), false),
      new Application(userC, 45000, new Date('2020-07-31'), true, false),
      new Application(userC, 28000, new Date('2020-07-31'), true, true),
    ];
    this.applicationsChanged.next();
  }

  getApplications(status: ApplicationStatus) {
    return this.applications.filter(
      app => {
        if (status === ApplicationStatus.APPROVED) {
          return app.approved && !app.paid;
        } else if (status === ApplicationStatus.REJECTED) {
          return !app.approved;
        } else {
          return app.approved && app.paid;
        }
      }
    );
  }

  payLoan(app: Application) {
    app.paid = true;
    environment.bankCapital += app.amount;
    this.utilService.capitalChanged.next();
    this.applicationsChanged.next();
  }

  storeApplication(appInfo) {
    // check if user is new
    let user = this.users.find(u => {
      return u.id === appInfo.id;
    });
    if (user === undefined) {
      user = new User(appInfo.name, appInfo.id, appInfo.email);
      this.users.push(user);
    }
    // store application
    const app = new Application(user, appInfo.amount, appInfo.paydate, appInfo.approved);
    this.applications.push(app);
  }

}
