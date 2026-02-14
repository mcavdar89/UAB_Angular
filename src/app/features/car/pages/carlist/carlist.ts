import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CarDetail } from '../../components/car-detail/car-detail';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-carlist',
  imports: [TableModule, ButtonModule, CarDetail],
  templateUrl: './carlist.html',
  styleUrl: './carlist.scss',
})
export class Carlist implements OnInit {

  private readonly _carService = inject(CarService);

  list = signal<Car[]>([]);
  selectedCar?: Car;


  ngOnInit(): void {
    this._carService.getCarList().subscribe((cars) => {
      this.list.set(cars);
    });
  }


  aracGoster(arac: Car): void {
    setTimeout(() => {
      this.selectedCar = arac;
    }, 100);

  }


}
