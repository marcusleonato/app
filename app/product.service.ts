import {Injectable} from 'angular2/core';
import {Product} from './product';
import {PRODUCTS} from './games-list';

@Injectable()
export class ProductService {
  getProducts() {
    return new Promise <Product[]> ( resolve =>
      setTimeout(() => resolve(PRODUCTS), 2000)
    );
  }
}
