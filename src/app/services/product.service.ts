import {EventEmitter, Injectable, Output} from '@angular/core';
import {InterfaceProduct} from "../products/show/InterfaceProduct";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Output() itemEdit = new EventEmitter();
  private products: InterfaceProduct[] = [
    {
      id: 1,
      name: 'Iphone XsMax',
      price: 10000,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      active: true
    }, {
      id: 2,
      name: 'Samsung Galaxy Note 10+',
      price: 6000,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      active: true
    }, {
      id: 3,
      name: 'Macbook Pro 2019',
      price: 1800,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      active: true
    }, {
      id: 4,
      name: 'Surface 2018',
      price: 1000,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      active: true
    },
  ];

  constructor(private route: Router) {
  }

  ShowProduct() {
    return this.products;
  }

  ServiceGetProduct(idProduct) {
    this.itemEdit.emit(this.products.find(product => product.id == idProduct));
    this.route.navigate(['/edit',idProduct]).then(()=>'');

  }

  AddProduct(newProduct: InterfaceProduct) {
    this.products.push(newProduct);
    this.route.navigate(['show']).then(() => '');
  }

}
