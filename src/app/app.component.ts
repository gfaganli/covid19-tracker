import { Component, OnInit } from '@angular/core';
import { CountryService } from './core/country.service';
import { ICountry } from './core/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sourceData: ICountry[] = [];
  isLoaded: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoaded = false;
    this.countryService.getCountryList().subscribe((response: any) => {
      this.sourceData = response;
      this.sourceData = Object.keys(response).map((key: any) => {
        return {
          ...response[key]['All'],
          ...{ country: key },
        };
      });
      this.isLoaded = true;
    });
  }
}
