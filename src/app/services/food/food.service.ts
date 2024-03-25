import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): String[]{
    return[
      '/assets/pictures/foods/1.jpg',
      '/assets/pictures/foods/2.jpg',
      '/assets/pictures/foods/3.jpg',
      '/assets/pictures/foods/4.jpg',
      '/assets/pictures/foods/5.jpg'
    ]
  }


}
