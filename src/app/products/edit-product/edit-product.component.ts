import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() item;
  constructor(private serviceProduct:ProductService) { }

  ngOnInit() {
    console.log(this.item);
  }

}
