import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // apiData: Product[] = [];
  // constructor(private _productsService: ProductsService) {
  //   this.getProducts();
  // }
  // getProducts() {
  //   this._productsService.getProducts().subscribe({
  //     next: (res) => {
  //       this.apiData = res.data;
  //       console.log(this.apiData);
  //     },
  //     error: (err) => console.log(err),
  //     complete: () => console.log('done'),
  //   });
  // }
}
