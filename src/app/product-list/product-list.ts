import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../services/product-service/product-service';

@Component({
selector: 'app-products-list',
standalone: true,
imports: [RouterLink, RouterOutlet, FormsModule, CommonModule],
templateUrl: './product-list.html',
styleUrl: './product-list.css',
})
export class ProductsList implements OnInit {

products: Product[] = [];
returnUrl: string | null = null;
selectedId: number | null = null;

constructor(
  private productService: ProductService,
  private route: ActivatedRoute,
  private router: Router
) {}

ngOnInit(): void {
  this.products = this.productService.getProducts();
}

getProduct(p: Product): void {
  this.selectedId = p.id;
  this.router.navigate(['/prod-list', p.id, 'details']);
}

}