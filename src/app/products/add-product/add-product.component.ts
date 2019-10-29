import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  dataForm = this.fb.group({
    name: [''],
    desc: [''],
    price:[''],
    image: ['']
  })

  constructor(private fb: FormBuilder, private productService: ProductService) {
  }

  onSubmit() {
    this.productService.AddProduct(this.dataForm.value);
  }

  ngOnInit() {

  }



}
