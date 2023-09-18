import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiData: any;
  constructor (private _productsService: ProductsService) {
    this.getProducts();
  }
  getProducts() {
    this._productsService.getProducts().subscribe({
      next: res => this.apiData = res.data,
      error: err => console.log(err),
      complete: () => console.log("done")
    })
  }
}
