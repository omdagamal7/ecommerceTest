import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/core/interfaces/product';
import { CartService } from 'src/core/services/cart.service';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId: string = '';
  details: Product = {} as Product
  constructor (
    private _activatedRoute: ActivatedRoute,
    private _productsService:ProductsService,
    private _cartServices: CartService
    ) {
    this.getId()
    this.getDetails()
  }
  getId() {
    this._activatedRoute.paramMap.subscribe({
      next:(res: any) => {
        this.productId = res.params.id;
        console.log('this.productId : ', this.productId );
      },
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
  getDetails() {
    this._productsService.getProductDetails(this.productId).subscribe({
      next: res => this.details = res.data,
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
  addProductToDetails(id: string) {
    this._cartServices.addToCart(id).subscribe({
      next: res => console.log(res.data),
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
}
