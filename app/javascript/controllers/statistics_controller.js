import { Controller } from "stimulus";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default class extends Controller {
  static targets = [ "revenue" ];

  connect() {
    this.renderChart();
  }

  renderChart() {
    const revenueData = JSON.parse(this.element.dataset.dashboardRevenueValue);
    const labels =  revenueData.map(item => item[0]);
    const data = revenueData.map(item => item[1]);
    const ctx = document.getElementById('line-chart');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Online Reservation',
          data: data
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}