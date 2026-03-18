import { Injectable } from '@angular/core';
import { Product } from '../../product';

@Injectable({ providedIn: 'root' })
export class ProductService {

private products: Product[] = [
  {
  id: 1,
  name: 'Nike Air Force 1 Low',
  category: 'Lifestyle Sneakers',
  price: 5995,
  stock: 20,
  status: 'Available',
  description: 'All-white leather upper with a padded collar for comfort.',
  brand: 'Nike',
  edition: '2024 Classic Edition'
  },
  {
  id: 2,
  name: 'Adidas Ultraboost 23',
  category: 'Running Shoes',
  price: 8999,
  stock: 0,
  status: 'Out of Stock',
  description: 'Features Boost midsole technology for energy return.',
  brand: 'Adidas',
  edition: '2023 Limited Edition'
  },
  {
  id: 3,
  name: 'Vans Old Skool',
  category: 'Skate Shoes',
  price: 3799,
  stock: 12,
  status: 'Available',
  description: 'Canvas and suede upper with the classic side stripe.',
  brand: 'Vans',
  edition: 'Original Edition'
  },
  {
  id: 4,
  name: 'New Balance 574',
  category: 'Lifestyle Sneakers',
  price: 4999,
  stock: 3,
  status: 'Limited',
  description: 'Retro-inspired silhouette with ENCAP midsole for all-day support.',
  brand: 'New Balance',
  edition: 'Retro Edition'
  },
  {
  id: 5,
  name: 'Puma RS-X',
  category: 'Chunky Sneakers',
  price: 4500,
  stock: 0,
  status: 'Out of Stock',
  description: 'Oversized sole with Running System technology.',
  brand: 'Puma',
  edition: '2023 Street Edition'
  },
  {
  id: 6,
  name: 'Converse Chuck Taylor All Star',
  category: 'Lifestyle Sneakers',
  price: 2999,
  stock: 25,
  status: 'Available',
  description: 'Classic canvas upper with medial eyelets for ventilation.',
  brand: 'Converse',
  edition: 'Core Edition'
  },
  {
  id: 7,
  name: 'Jordan 1 Retro High OG',
  category: 'Basketball Shoes',
  price: 9999,
  stock: 2,
  status: 'Limited',
  description: 'Full-grain leather upper in the original Chicago colorway.',
  brand: 'Jordan',
  edition: 'OG Chicago Edition'
  },
  {
  id: 8,
  name: "Skechers D'Lites",
  category: 'Comfort Shoes',
  price: 3299,
  stock: 18,
  status: 'Available',
  description: 'Memory foam cushioned insole with a lightweight chunky outsole.',
  brand: 'Skechers',
  edition: 'Comfort Plus Edition'
  },
  {
  id: 9,
  name: 'Reebok Classic Leather',
  category: 'Lifestyle Sneakers',
  price: 4299,
  stock: 0,
  status: 'Out of Stock',
  description: 'Soft garment leather upper for a clean look.',
  brand: 'Reebok',
  edition: 'Heritage Edition'
  },
  {
  id: 10,
  name: 'Under Armour HOVR Phantom',
  category: 'Running Shoes',
  price: 6499,
  stock: 1,
  status: 'Limited',
  description: 'HOVR cushioning with Energy Web compression for zero-gravity feel.',
  brand: 'Under Armour',
  edition: '2024 Performance Edition'
  }
];

getProducts(): Product[] {
  return this.products;
}

getProductById(id: number): Product | undefined {
  return this.products.find(p => p.id === id);
}

updateProduct(updatedProduct: Product): void {
  const index = this.products.findIndex(p => p.id === updatedProduct.id);
  if(index !== -1) {
    this.products[index] = {...updatedProduct};
  }
}

}