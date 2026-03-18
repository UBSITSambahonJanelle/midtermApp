import { Injectable } from '@angular/core';
import { Supplier } from '../supplier.interface';

@Injectable({ providedIn: 'root' })
export class SupplierService {

// mock data - 10 suppliers
private suppliers: Supplier[] = [
  {
  id: 1,
  supplierName: 'Nike Philippines',
  location: 'Taguig, Metro Manila',
  email: 'nike.ph@supplier.com',
  contactPerson: 'Juan dela Cruz',
  phone: '09171234567',
  productsSupplied: ['Running Shoes', 'Lifestyle Sneakers'],
  status: 'Active'
  },
  {
  id: 2,
  supplierName: 'Adidas Distributor PH',
  location: 'Makati, Metro Manila',
  email: 'adidas.ph@supplier.com',
  contactPerson: 'Maria Santos',
  phone: '09281234567',
  productsSupplied: ['Running Shoes', 'Training Shoes'],
  status: 'Active'
  },
  {
  id: 3,
  supplierName: 'Vans PH Trading',
  location: 'Quezon City, Metro Manila',
  email: 'vans.ph@supplier.com',
  contactPerson: 'Pedro Reyes',
  phone: '09391234567',
  productsSupplied: ['Skate Shoes', 'Lifestyle Sneakers'],
  status: 'Active'
  },
  {
  id: 4,
  supplierName: 'New Balance Imports',
  location: 'Pasig, Metro Manila',
  email: 'nb.ph@supplier.com',
  contactPerson: 'Anna Garcia',
  phone: '09451234567',
  productsSupplied: ['Lifestyle Sneakers', 'Running Shoes'],
  status: 'Inactive'
  },
  {
  id: 5,
  supplierName: 'Puma Southeast Asia',
  location: 'Mandaluyong, Metro Manila',
  email: 'puma.sea@supplier.com',
  contactPerson: 'Carlos Lim',
  phone: '09561234567',
  productsSupplied: ['Chunky Sneakers', 'Running Shoes'],
  status: 'Active'
  },
  {
  id: 6,
  supplierName: 'Converse Trading Co.',
  location: 'Cebu City, Cebu',
  email: 'converse.ph@supplier.com',
  contactPerson: 'Rosa Fernandez',
  phone: '09671234567',
  productsSupplied: ['Lifestyle Sneakers'],
  status: 'Active'
  },
  {
  id: 7,
  supplierName: 'Jordan Brand PH',
  location: 'BGC, Taguig',
  email: 'jordan.ph@supplier.com',
  contactPerson: 'Miguel Torres',
  phone: '09781234567',
  productsSupplied: ['Basketball Shoes'],
  status: 'Active'
  },
  {
  id: 8,
  supplierName: 'Skechers Distributor',
  location: 'Davao City, Davao',
  email: 'skechers.ph@supplier.com',
  contactPerson: 'Lena Cruz',
  phone: '09891234567',
  productsSupplied: ['Comfort Shoes', 'Lifestyle Sneakers'],
  status: 'Inactive'
  },
  {
  id: 9,
  supplierName: 'Reebok PH Supply',
  location: 'Antipolo, Rizal',
  email: 'reebok.ph@supplier.com',
  contactPerson: 'Jose Ramos',
  phone: '09121234567',
  productsSupplied: ['Lifestyle Sneakers', 'Training Shoes'],
  status: 'Active'
  },
  {
  id: 10,
  supplierName: 'Under Armour Imports',
  location: 'Iloilo City, Iloilo',
  email: 'ua.ph@supplier.com',
  contactPerson: 'Clara Mendoza',
  phone: '09231234567',
  productsSupplied: ['Running Shoes', 'Training Shoes'],
  status: 'Active'
  }
];

// returns all suppliers
getSuppliers(): Supplier[] {
  return this.suppliers;
}

// returns one supplier by id
getSupplierById(id: number): Supplier | undefined {
  return this.suppliers.find(s => s.id === id);
}

// updates a supplier in the array
updateSupplier(updatedSupplier: Supplier): void {
  const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
  if(index !== -1) {
    this.suppliers[index] = {...updatedSupplier};
  }
}

}