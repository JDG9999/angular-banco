import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-credit-approval-message',
  templateUrl: './credit-approval-message.component.html',
  styleUrls: ['./credit-approval-message.component.scss']
})
export class CreditApprovalMessageComponent implements OnInit {

  title: string;
  closeBtnName: string;
  message: string;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
