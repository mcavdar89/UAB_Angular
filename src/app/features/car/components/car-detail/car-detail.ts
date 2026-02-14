import { Component, input, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-detail',
  imports: [],
  templateUrl: './car-detail.html',
  styleUrl: './car-detail.scss',
})
export class CarDetail implements OnInit {
  // @Input() car!: Car;
  car = input.required<Car>();




  ngOnInit(): void {
    console.log("CarDetail componenti ngOnInit tetiklendi. Gelen araç bilgisi:", this.car);
  }



}
