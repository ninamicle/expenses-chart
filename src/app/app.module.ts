import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpensesChartComponent } from './components/expenses-chart/expenses-chart.component';

@NgModule({
  declarations: [AppComponent, ExpensesComponent, ExpensesChartComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
