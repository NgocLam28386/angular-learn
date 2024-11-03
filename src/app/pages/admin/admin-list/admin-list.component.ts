import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../../services/product.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css',
})
export class AdminListComponent {
  products: Product[] = [];
  product: Product | null = null;
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (e) => {
        console.log(e);
        alert('' + e.message);
      },
    });
  }

  deleteProduct(i: number) {
    confirm('Are you sure ?');
    this.productService.deleteProduct(this.products[i].id).subscribe({
      next: () => {
        this.products.splice(i, 1);
        alert('Xoa thanh cong');
      },

      error: (e) => {
        console.log(e);
        alert('' + e.message);
      },
    });
  }
}
