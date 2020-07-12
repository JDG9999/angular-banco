import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreditApprovalMessageComponent } from '../credit-approval-message/credit-approval-message.component';
import { ApiService } from 'src/app/services/api.service';
import { Application } from 'src/app/models/application';
import { environment } from './../../../environments/environment';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {

  creditForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  bsModalRef: BsModalRef;

  applications: Application[];
  users: User[];
  bankCapital: number;

  constructor(
    private apiService: ApiService,
    private localeService: BsLocaleService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.applications = this.apiService.applications;
    this.users = this.apiService.users;
    this.bankCapital = environment.bankCapital;
    this.initCreditForm();
    this.setupDatepicker();
  }

  initCreditForm() {
    this.creditForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      id: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      amount: new FormControl(environment.minLoan, []),
      paydate: new FormControl(null, []),
    });
  }

  setupDatepicker() {
    this.localeService.use('es');
    this.bsConfig = Object.assign({}, { containerClass: 'theme-blue' });
  }

  calculateCredit() {
    const info = this.creditForm.value;
    let resultTitle = '';
    let resultMsg = '';
    let approved = true;
    // check if the bank has funds
    if (info.amount > this.bankCapital) {
      approved = false;
      resultTitle = 'RECHAZADO :(';
      resultMsg = 'Actualmente no contamos con suficiente dinero.';
    } else {
      const userLoans = this.applications.filter(app => app.user.id === info.id);
      // check if they've paid previous all loans
      const paidLoans = this.verifyPaidLoans(userLoans);
      if (!paidLoans) {
        approved = false;
        resultTitle = 'RECHAZADO :(';
        resultMsg = 'Debes pagar todos tus créditos antes de solicitar uno nuevo.';
      } else {
        // check if they've been approved before
        // or else, make it random!
        const previouslyApproved = this.verifyPreviouslyApproved(userLoans);
        if (previouslyApproved) {
          approved = true;
          resultTitle = 'APROBADO! :D';
          resultMsg = 'Eres nuestro cliente favorito, tu crédito está aprobado!';
        } else {
          approved = Math.random() < 0.7 ? true : false;
          if (approved) {
            resultTitle = 'APROBADO! :D';
            resultMsg = 'Felicidades, tu crédito fue aprobado!';
          } else {
            resultTitle = 'RECHAZADO :(';
            resultMsg = 'En este momento no podemos aprobar tu crédito.';
          }
        }
      }
    }
    // store application
    if (approved) {
      this.bankCapital -= info.amount;
    }
    info.approved = approved;
    this.apiService.storeApplication(info);
    this.openCreditMessage(resultTitle, resultMsg);
  }

  verifyPaidLoans(userLoans) {
    let paid = true;
    userLoans.forEach(loan => {
      if (!loan.paid) {
        paid = false;
      }
    });
    return paid;
  }

  verifyPreviouslyApproved(userLoans) {
    let prev = false;
    userLoans.some(loan => {
      if (loan.approved) {
        prev = true;
      }
    })
    return prev;
  }

  openCreditMessage(titleInfo: string, msgInfo: string) {
    const initialState = {
      message: msgInfo,
      title: titleInfo
    };
    this.bsModalRef = this.modalService.show(CreditApprovalMessageComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Cerrar';
  }

}
