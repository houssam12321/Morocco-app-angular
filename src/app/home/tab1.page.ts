import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { Router } from '@angular/router'; 
import { City } from '../city';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  cities : City[] = [];
  constructor(private cityService: CityService, private router: Router) { }
  ngOnInit() {
    this.cities = this.cityService.getCities();
  }
  openCityDetail(id: number) {
    this.router.navigate(['/city-detail', id]);
  }



}
