import { Component, Input } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // @Input() products: Product[] = [];
}
