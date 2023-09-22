import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/core/services/cart.service';
import { Cart } from './interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  apiData!: Cart;
  constructor (private _cartService: CartService) {}
  ngOnInit(): void {
    this._cartService.getCart().subscribe({
      next: res => this.apiData = res,
      error: err => console.log(err),
      complete: () => console.log('done')
    })

  }
  updateProductCount( count: number, id: string){
    this._cartService.updateProductCount(id,count).subscribe({
      next: res => {
        this.apiData = res;
        // if (count == 0) {
        //   this.deleteProduct(id)
        // }
      },
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
  deleteProduct(id: string) {
    this._cartService.deleteProduct(id).subscribe({
      next: res => this.apiData = res,
      error: err => console.log(err),
      complete: () => console.log('done')
    })
  }
}
