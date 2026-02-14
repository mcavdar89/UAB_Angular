import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CarDetail } from '../../components/car-detail/car-detail';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-carlist',
  imports: [TableModule, ButtonModule, CarDetail, DialogModule, InputTextModule, FormsModule],
  templateUrl: './carlist.html',
  styleUrl: './carlist.scss',
})
export class Carlist implements OnInit {

  private readonly _carService = inject(CarService);

  list = signal<Car[]>([]);
  selectedCar = signal<Car>(undefined as any);

  searchText = signal('');

  visible = signal(false);


  filteredList = computed(() => {
    const search = this.searchText().toLowerCase();
    return this.list().filter(car => car.brandAd.toLowerCase().includes(search) || car.modelAd.toLowerCase().includes(search) || car.plate.toLowerCase().includes(search));
  });


  ngOnInit(): void {
    this._carService.getCarList().subscribe((cars) => {
      this.list.set(cars);
    });
  }


  aracGoster(arac: Car): void {
    this.visible.update(visible => !visible); // Dialog görünürlüğünü toggle yapıyoruz. Eğer dialog görünür değilse görünür yapar, görünür ise gizler.
    setTimeout(() => {
      this.selectedCar.set(arac);
    }, 100);

  }


}
