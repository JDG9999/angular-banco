import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-bank-capital',
  templateUrl: './bank-capital.component.html',
  styleUrls: ['./bank-capital.component.scss']
})
export class BankCapitalComponent implements OnInit {

  bankCapital: number;

  constructor() { }

  ngOnInit() {
    this.bankCapital = environment.bankCapital;
  }

}
