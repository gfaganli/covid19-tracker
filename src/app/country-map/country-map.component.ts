import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ICountry } from '../core/country';
import { CountryService } from '../core/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.scss'],
})
export class CountryMapComponent implements OnInit, OnDestroy {
  tableItemSubscription: Subscription = new Subscription();
  @Input() sourceData: ICountry[] = [];
  // google maps zoom level
  zoom: number = 5;
  // initial center position for the map
  lat: number = 40.409264;
  lng: number = 49.867092;

  constructor(private service: CountryService) {}

  ngOnInit(): void {
    this.tableItemSubscription = this.service.tableItemClicked$.subscribe(
      (data: ICountry) => {
        if (data?.lat) {
          this.lat = Number(data?.lat);
          this.lng = Number(data?.long);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.tableItemSubscription.unsubscribe();
  }
}
