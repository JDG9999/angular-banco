import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-credit-value',
  templateUrl: './credit-value.component.html',
  styleUrls: ['./credit-value.component.scss'],
})
export class CreditValueComponent implements OnInit {

  @Input() form: FormGroup;
  minValue: number;
  maxValue: number;

  value: number;

  constructor() { }

  ngOnInit() {
    this.minValue = environment.minLoan;
    this.maxValue = environment.maxLoan;
    this.value = this.minValue;
  }

  changeValue(event) {
    this.value = event.target.value;
  }

}
