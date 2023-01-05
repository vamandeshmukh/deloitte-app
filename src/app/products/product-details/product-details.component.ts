import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pId: number;
  product: any;
  allProds: any = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.pId = 0;
    this.product = {}
  }

  ngOnInit() {
    this.product = {}

    this.route.params.subscribe(params => {
      this.pId = params['id'];
      this.productService.getProductById(this.pId)
        .subscribe(prod => this.product = prod.valueOf());
    });

    // this.route.paramMap.subscribe(params => {
    //   const searchTerm = params.get('searchTerm');
    //   console.log(params);
    //   console.log(searchTerm);
    //   this.productService.getAllProducts().subscribe((prod) => {
    //     this.allProds = prod.valueOf();
    //     for (const prod of this.allProds) {
    //       // console.log(prod);
    //       this.product = prod;
    //       // console.log(this.product);
    //     }
    //   });
    // });

  }
}
