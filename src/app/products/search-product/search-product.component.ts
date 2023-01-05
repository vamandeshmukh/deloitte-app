import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {

  searchQuery: string;

  constructor(private router: Router) { this.searchQuery = ''; }

  searchProduct() {
    this.router.navigate(['/product-details', this.searchQuery]);
  }


}
