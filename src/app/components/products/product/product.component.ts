import { Component, OnInit } from '@angular/core';

// Service

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

}
