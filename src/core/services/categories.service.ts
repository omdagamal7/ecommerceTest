import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _httpClient: HttpClient) { 
    this.getCategories();
  }
  getCategories() :Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/categories');
  }
}
