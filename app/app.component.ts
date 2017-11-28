import {Component, OnInit} from 'angular2/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {OrderBy} from './orderBy';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';
import {ProductDetail} from './product-detail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.games.html',
    styleUrls: ['app/app.component.css'],
    directives: [ ROUTER_DIRECTIVES],
    providers: [ProductService],
    pipes: [ OrderBy ]
})

@RouteConfig([
    {
        path: "/productDetail/:id/",
        component: ProductDetail,
        name: "ProductDetail",
    }
])


export class AppComponent implements OnInit {
    title = 'Games';
    products: Product[];
    selectedProduct: Product;

    constructor(private _productService: ProductService, public router: Router) { }
    
    getProducts() {
        this._productService.getProducts().then(products => this.products = products);
    }
    ngOnInit() {
       this.getProducts();
    }

    onClick(productId) {
        this.router.navigate(['/productDetail/', {'id': productId.toString()}]);
    }

}
