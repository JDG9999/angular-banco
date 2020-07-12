import { User } from './user';

export class Application {
  user: User;
  amount: number;
  paydate: Date;
  approved: boolean;
  paid: boolean;

  constructor(user: User, amount: number, paydate: Date, approved: boolean, paid?: boolean) {
    this.user = user;
    this.amount = amount;
    this.paydate = paydate;
    this.approved = approved;
    this.paid = paid;
  }
}
