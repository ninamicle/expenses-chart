import { Component, OnInit } from '@angular/core';
import { ChartData } from 'src/app/models/chart-data.model';
import data from '../../../assets/db.json';
import { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  balance: Balance | null = data.balance;
  chartData: ChartData[] | null = data.chartData;

  constructor() {}

  ngOnInit(): void {}
}
