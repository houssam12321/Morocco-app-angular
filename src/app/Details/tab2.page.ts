import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  city: City | undefined;

  constructor(private route: ActivatedRoute, private cityService: CityService, private router: Router) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.city = this.cityService.getCity(id);
    } else {
      console.error("No city ID found in route parameters");
    }
  }

  openCityMap() {
    if (this.city) {
      this.router.navigate(['/tabs/map'], { queryParams: { latitude: this.city.latitude, longitude: this.city.longitude } });
    }
  }

  goBack() {
    this.router.navigate(['/tabs/home']);
  }
}
