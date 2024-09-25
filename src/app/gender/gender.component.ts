import { Component, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent {
  title = 'highcharts';
  @Input() parentGenderWiseData: any[] = [];

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions2: Highcharts.Options = {}; // required
  chartOptions: Highcharts.Options =
    {
      chart: {
        type: 'bar',
        height: 80,
        margin: 10,
      },
      title: {
        text: 'Gender',
        align: 'left',
        y: 1,
        style: {
          fontSize: '15px',
          fontWeight: '600',
        }
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false,
        min: 0,
      },
      legend: {
        itemStyle: {
          fontWeight: 'bold',
          fontSize: '10px',
        },
        layout: 'horizontal',
        floating: true,
        align: 'right',
        verticalAlign: 'top',
        symbolRadius: 2,
        symbolPadding: 5,
        y: -17,
        x: 18,
        reversed: true,
        symbolWidth: 10
      },
      plotOptions: {
        bar: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}%'
          }
        }
      },
      exporting: { enabled: false },
      series: [
        { color: '#92C5FD', name: 'M', data: [43], index: 0, type: 'bar' },
        { color: '#FB92FD', name: 'F', data: [57], index: 1, type: 'bar' },
      ],
      // series: [],
      accessibility: {
        enabled: false
      },
    };

  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false


  ngOnChanges(changes: SimpleChanges): void {

    if (changes['parentGenderWiseData']) {
      console.log(JSON.stringify(this.parentGenderWiseData));
      // Update the chart series data
      this.chartOptions.series = this.parentGenderWiseData;
      this.updateFlag = true; // Trigger chart update
    }
  }


}
