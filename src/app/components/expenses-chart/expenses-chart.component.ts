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

  loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const ctx = this.myChart.nativeElement.getContext('2d');
      this.loading = false;
      this.setupChart(ctx);
    }, 2000);
  }

  setupChart(ctx: any) {
    const labels = this.data?.map((x) => x.day);
    const amount = this.data?.map((x) => x.amount);
    let x = 3;
    const currentDay = this.data?.find((x) => x.currentDay);
    console.log(currentDay);
    const data = {
      labels: labels,
      datasets: [
        {
          data: amount,
          legend: {
            display: false,
          },
          backgroundColor: this.data?.map((x) =>
            x.currentDay ? '#76B5BC' : '#EC775F'
          ),
          hoverBackgroundColor: this.data?.map((x) =>
            x.currentDay ? 'rgba(118,181,188,0.6)' : 'rgba(236,119,95,0.6)'
          ),
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    };
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            callbacks: {
              label: function (context) {
                console.log(context);
                let label = context.dataset.label || '';
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(context.parsed.y);
                }
                return label;
              },
              title: function () {
                return '';
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#93867B',
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}
