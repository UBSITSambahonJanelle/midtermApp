import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SupplierService } from '../services/supplier';
import { Supplier } from '../supplier.interface';

@Component({
selector: 'app-suppliers-list',
standalone: true,
imports: [CommonModule],
templateUrl: './suppliers-list.html',
styleUrl: './suppliers-list.css'
})

export class SuppliersListComponent implements OnInit {

suppliers: Supplier[] = [];

constructor(private supplierService: SupplierService, private router: Router) {}

ngOnInit() {
  this.suppliers = this.supplierService.getSuppliers();
}

viewSupplierDetails(id: number) {
  this.router.navigate(['/suppliers', id]);
}

}