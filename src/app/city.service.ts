import { Injectable } from '@angular/core';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cities: City[] = [
    { 
      id: 1, 
      name: 'Casablanca', 
      description: 'The largest city in Morocco and its economic hub.', 
      latitude: 33.5731, 
      longitude: -7.5898, 
      url: 'https://f2.hespress.com/wp-content/uploads/2023/08/Casablanca.jpg' 
    },
    { 
      id: 2, 
      name: 'Marrakech', 
      description: 'Known as the Red City, famous for its palaces and gardens.', 
      latitude: 31.6295, 
      longitude: -7.9811, 
      url: 'https://www.riadnayanour.com/wp-content/uploads/2023/09/Visiter-Marrakech-en-Ete-Hiver.jpg' 
    },
    { 
      id: 3, 
      name: 'Rabat', 
      description: 'The capital city of Morocco, known for its historical sites.', 
      latitude: 34.020882, 
      longitude: -6.841650, 
      url: 'https://atlanticagdal.com/wp-content/uploads/2017/11/tour-hassan-rabat-maroc1-1024x683.jpg' 
    },
    { 
      id: 4, 
      name: 'Fes', 
      description: 'A city known for its ancient medina and vibrant cultural heritage.', 
      latitude: 34.0331, 
      longitude: -4.9998, 
      url: 'https://riad-layalina-fes.com/wp-content/uploads/Medersa-Al-Attarine-Fes-650x450.jpg' 
    },
    { 
      id: 5, 
      name: 'Tangier', 
      description: 'A port city blending cultures and known for its views of the Strait of Gibraltar.', 
      latitude: 35.7595, 
      longitude: -5.834, 
      url: 'https://i.f1g.fr/media/cms/1365x1024_cropupscale/2023/08/29/13927e60d7f371ce56d3b74420fa8706eeb6bd786e96d445e8b5c2b1c6c52d6d.jpg' 
    },
    { 
      id: 6, 
      name: 'Chefchaouen', 
      description: 'The Blue Pearl of Morocco, famous for its blue-washed streets.', 
      latitude: 35.1717, 
      longitude: -5.2697, 
      url: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/2c/a9/51.jpg' 
    },
    { 
      id: 7, 
      name: 'Agadir', 
      description: 'A coastal city known for its beach resorts and relaxed atmosphere.', 
      latitude: 30.4278, 
      longitude: -9.5981, 
      url: 'https://isiam.ma/wp-content/uploads/2021/08/35225719-Original-2.jpg' 
    },
    { 
      id: 8, 
      name: 'Essaouira', 
      description: 'A seaside city known for its medina and strong coastal winds.', 
      latitude: 31.5085, 
      longitude: -9.7595, 
      url: 'https://www.lopinion.ma/photo/art/default/83588963-59817059.jpg' 
    },
    { 
      id: 9, 
      name: 'Al Hoceima', 
      description: 'A stunning coastal city known for its beautiful beaches and mountainous terrain.', 
      latitude: 35.2399574, 
      longitude: -3.978833, 
      url: 'https://f2.hespress.com/wp-content/uploads/2022/03/al-hoceima.jpg' 
    },
    { 
      id: 10, 
      name: 'Oujda', 
      description: 'A historic city with a rich cultural heritage, located near the Algerian border.', 
      latitude: 34.6811, 
      longitude: -1.9134, 
      url: 'https://www.marocvoyages.com/wp-content/uploads/2016/02/Ville-Oujda-Maroc.jpg' 
    }

  ];
  router: any;
  ;

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }

  getCity(id: number): City | undefined {
    return this.cities.find(city => city.id === id);
  }
  viewOnMap(city: any) { this.router.navigate(['/tabs/tab3'], { queryParams: { latitude: city.latitude, longitude: city.longitude } }); }
}
