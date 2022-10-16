import { Component, Input, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { ICountry } from '../core/country';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.scss'],
})
export class CountryChartComponent implements OnInit {
  // TODO: replace any type with {name,value} type
  topCountries: any = [];
  view: [number, number] = [400, 400];
  // @ts-ignore
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  @Input() sourceData: ICountry[] = [];

  ngOnInit(): void {
    // sort and show only last 10 item with highest numbers on the list
    this.sourceData
      .sort((a, b) => (a.confirmed < b.confirmed ? 1 : -1))
      .slice(0, 10)
      .forEach((item) => {
        this.topCountries.push({
          name: item?.country,
          value: item?.confirmed,
        });
      });
  }
}
