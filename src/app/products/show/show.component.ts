import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {InterfaceProduct} from "./InterfaceProduct";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  listProduct: InterfaceProduct[];

  dataForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    desc: new FormControl()
  })

  constructor(private productService: ProductService) {
  }

  GetProduct(id){
    this.productService.ServiceGetProduct(id);
  }
  Destroy(id){
    console.log(id);
  }

  ngOnInit() {
    this.listProduct = this.productService.ShowProduct();
  }

}
