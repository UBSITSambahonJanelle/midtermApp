import { Component } from '@angular/core';
import { FormsModule } from '../../../../node_modules/@angular/forms/types/forms';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  title: string = "Angular Data Binding Demo";
  studentName: string = 'Janelle Joy Sambahon';
  courseCode: string = 'APPDEV';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{{expression}}"
  curly:string ="{{}}"
  common: string = "{{userName}}"
  methods: string = "{{getStatus()}}"
  dotnot: string = "{{user.name}}"
  dotnot2: string = "{{user?.profile?.email}}"
}
