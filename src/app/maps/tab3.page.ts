import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements AfterViewInit {
  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  map!: google.maps.Map;
  latitude: number = 34;
  longitude: number = -6;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      this.latitude = parseFloat(params['latitude']);
      this.longitude = parseFloat(params['longitude']);
      this.initMap();
    });
  }

  initMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 10,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
