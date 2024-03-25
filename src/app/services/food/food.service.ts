import { Injectable } from '@angular/core';
import { Food} from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return[
      {
        id:1,
        name:'Dosa',
        cookTime:'5',
      price: 10,
      favourite:false,
      stars:4.5,
      imageUrl: '/assets/pictures/foods/1.jpg',
      origins:['India'],

    },
    {
      id:1,
      name:'Chicken Biryani',
      cookTime:'20',
      price: 15,
      favourite:true,
      stars:5,
      imageUrl: '/assets/pictures/foods/2.jpg',
      origins:['India'],
    },
    {
      id:1,
      name:'Chicken Fry',
      cookTime:'20',
      price: 12,
      favourite:false,
      stars:4.5,
      imageUrl: '/assets/pictures/foods/3.jpg',
      origins:['India'],
      
    },
    {
      id:1,
      name:'Paneer Curry',
      cookTime:'15',
      price: 10,
      favourite:false,
      stars:4,
      imageUrl: '/assets/pictures/foods/4.jpg',
      origins:['India'],
      
    },
    {
      id:1,
      name:'Pani Puri',
      cookTime:'6',
      price: 8,
      favourite:true,
      stars:4.5,
      imageUrl: '/assets/pictures/foods/5.jpg',
      origins:['India'],
    }
    ]
  }


}
