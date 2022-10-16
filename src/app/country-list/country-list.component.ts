import { Component, Input } from '@angular/core';
import { ICountry } from '../core/country';
import { CountryService } from '../core/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent {
  @Input() sourceData: ICountry[] = [];

  columns = [
    {
      name: 'Country',
      prop: 'country',
    },
    {
      name: 'Confirmed',
      prod: 'confirmed',
    },
    {
      name: 'Recovered',
      prop: 'recovered',
    },
    {
      name: 'Deaths',
      prop: 'deaths',
    },
    {
      name: 'Population',
      prop: 'population',
    },
  ];

  constructor(private service: CountryService) {}

  onActivate(event: any) {
    if (event.type == 'click') {
      this.service.tableItemSource.next(event?.row);
    }
  }
}
