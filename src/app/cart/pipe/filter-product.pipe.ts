import { Pipe, PipeTransform, inject } from '@angular/core';
import { Cart } from '../interface/cart';
import { CartService } from 'src/core/services/cart.service';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {
  constructor (private _cartService: CartService) {}
  transform(products:any[]): any[] {
    return products.filter(ele => ele.count > 0)
  }

}
