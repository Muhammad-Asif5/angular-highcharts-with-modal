import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnChanges {
  @Input() chartData: any[] = [];
  @Input() chartOptions: Highcharts.Options = {}; // Accept chart options as input
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart'; 
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {}; 
  updateFlag: boolean = false;
  oneToOneFlag: boolean = true;
  runOutsideAngular: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData']) {
      this.chartOptions.series = this.chartData;
      this.updateFlag = true; // Trigger chart update
    }
  }
}
