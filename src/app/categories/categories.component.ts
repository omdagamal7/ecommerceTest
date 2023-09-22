import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Categories } from 'src/core/interfaces/categories';
import { CategoriesService } from 'src/core/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 4
      }, 
      1000: {
        items: 6
      },
      1400: {
        items: 8
      }
    },
    nav: true
  }
  apiData : Categories[] = [];
  constructor (private _categoriesServices: CategoriesService) {
    this.getData()
  }
  getData() {
    this._categoriesServices.getCategories().subscribe({
      next: res => {
        this.apiData = res.data;
      },
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
}
