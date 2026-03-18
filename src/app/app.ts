import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Navi } from './components/navi/navi';
import { CommonModule } from '@angular/common';
import { Products } from './products/products';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, RouterLink, Navi, CommonModule, Products],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
title = 'midtermApp';
}