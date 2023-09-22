import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { CartService } from 'src/core/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = {} as Product;
  title : any;
  constructor (private _cartServices:CartService) {}
  addProductToDetails(id: string) {
    this._cartServices.addToCart(id).subscribe({
      next: res => console.log(res),
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
}
