import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpensesChartComponent } from './components/expenses-chart/expenses-chart.component';
import { ExpensesComponent } from './components/expenses/expenses.component';

@NgModule({
  declarations: [AppComponent, ExpensesComponent, ExpensesChartComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
