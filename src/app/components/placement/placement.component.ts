import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, ChartOptions, ChartDataset, registerables } from 'chart.js';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})

 
  export class PlacementComponent implements AfterViewInit {
    @ViewChild('placementChart', { static: false }) placementChartRef!: ElementRef;
    @ViewChild('DeptChart', { static: false }) DeptChartRef!: ElementRef;

    ngAfterViewInit(): void {
      this.generateChart();
      this.generateDeptChart();
    }
  
    generateChart(): void {
      Chart.register(...registerables);
  
      const canvas = this.placementChartRef.nativeElement as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
  
      if (!ctx) {
        throw new Error('Failed to get 2D rendering context.');
      }
  
      const data = [35, 45, 60, 55, 70, 80];
      const labels = ['2016', '2017', '2018', '2019', '2020', '2021'];
  
      const backgroundColors = [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ];
  
      const placementChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Placement Records',
              data: data,
              backgroundColor: backgroundColors,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    }

    generateDeptChart(): void {
      Chart.register(...registerables);
  
      const canvas = this.DeptChartRef.nativeElement as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
  
      if (!ctx) {
        throw new Error('Failed to get 2D rendering context.');
      }
  
      const data = [25, 35, 40]; // Placement data for each department
      const labels = ['BSc', 'MSc', 'Diploma']; // Department labels
      const colors = [
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 206, 86, 0.7)',
      ]; // Colors for each department
  
      const DeptChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }
  