import { Component, OnInit } from '@angular/core';
import * as monthAmount from '../../../assets/db.json';
import { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  totalAmount: Balance | null = monthAmount.balance;

  constructor() {}

  ngOnInit(): void {}
}
