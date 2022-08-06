import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData } from 'src/app/models/chart-data.model';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-expenses-chart',
  templateUrl: './expenses-chart.component.html',
  styleUrls: ['./expenses-chart.component.scss'],
})
export class ExpensesChartComponent implements OnInit {
  @ViewChild('myChart', { static: true })
  myChart!: ElementRef<HTMLCanvasElement>;
  @Input() data: ChartData[] | null = null;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const ctx = this.myChart.nativeElement.getContext('2d');

      this.setupChart(ctx);
      console.log(this.myChart.nativeElement);
    }, 5000);
  }

  setupChart(ctx: any) {
    const labels = this.data?.map((x) => x.day);
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
    });
  }
}
