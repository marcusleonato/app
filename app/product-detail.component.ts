import {Component, OnInit, Inject} from 'angular2/core';
import { RouteParams, RouteConfig , Router } from 'angular2/router';


@Component({
    selector: 'productDetail',
    template: 'Component Two with route param <b>ID: {{ id }}></b>',
    providers: [ RouteParams]
})



export class ProductDetail {
    productID: string;
    constructor(params: RouteParams){
        this.productID = params.get('id');
    }
}