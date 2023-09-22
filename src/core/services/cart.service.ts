import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _httpClient: HttpClient) { }
  addToCart(id: string) : Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
      productId: id
    },{
      headers:{
        token: `${localStorage.getItem('user token')}`
      }
    })
  }

  getCart() : Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{
      headers:{
        token: `${localStorage.getItem('user token')}`
      }
    })
  }
  updateProductCount(id:string, count:number) : Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count: `${count}`
    },
    {
      headers:{
        token: `${localStorage.getItem('user token')}`
      }
    })
  }
  deleteProduct(id:string) : Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
      headers:{
        token: `${localStorage.getItem('user token')}`
      }
    })
  }
}
