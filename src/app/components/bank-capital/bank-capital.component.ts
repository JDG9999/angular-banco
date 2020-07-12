import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-bank-capital',
  templateUrl: './bank-capital.component.html',
  styleUrls: ['./bank-capital.component.scss']
})
export class BankCapitalComponent implements OnInit, OnDestroy {

  bankCapital: number;
  subscription;

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.bankCapital = environment.bankCapital;
    this.subscription = this.utilService.capitalChanged.subscribe(
      () => {
        this.bankCapital = environment.bankCapital;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
