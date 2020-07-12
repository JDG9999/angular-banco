import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Application } from 'src/app/models/application';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  userId: string;
  applications: Application[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.idUsuario;
    this.applications = this.apiService.applications.filter(app =>
      app.user.id === this.userId
    );
  }

}
