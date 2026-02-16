import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HighlightDirective } from '../../../../shared/directives/highlight-directive';
import { TitleCasePipe } from '../../../../shared/pipes/title-case-pipe';
import { CarDetail } from '../../components/car-detail/car-detail';
import { CarForm } from '../../components/car-form/car-form';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-carlist',
  imports: [
    TableModule,
    ButtonModule,
    CarDetail,
    DialogModule,
    InputTextModule,
    FormsModule,
    CarForm,
    // JsonPipe,
    DatePipe,
    TitleCasePipe,
    HighlightDirective
  ],
  templateUrl: './carlist.html',
  styleUrl: './carlist.scss',
})
export class Carlist implements OnInit {


  kelime = 'ahmeT sınıfa Geldi ve girdi';

  date = new Date();

  backgroundColor = signal('lightblue');


  cdr = inject(ChangeDetectorRef);

  private readonly _carService = inject(CarService);

  list = signal<Car[]>([]);
  selectedCar = signal<Car>(undefined as any);

  searchText = signal('');

  visible = signal(false);
  visibleForm = signal(false);


  filteredList = computed(() => {
    const search = this.searchText().toLowerCase();
    return this.list().filter(car => car.brandAd.toLowerCase().includes(search) || car.modelAd.toLowerCase().includes(search) || car.plate.toLowerCase().includes(search));
  });


  route = inject(Router);



  ngOnInit(): void {

    setTimeout(() => {
      this.backgroundColor.set('lightgreen');
    }, 1000);



    this._carService.getCarList().subscribe((cars) => {
      this.list.set(cars);
    });
  }


  aracGoster(arac: Car): void {
    this.visible.update(visible => !visible); // Dialog görünürlüğünü toggle yapıyoruz. Eğer dialog görünür değilse görünür yapar, görünür ise gizler.
    // setTimeout(() => {
    this.selectedCar.set(arac);
    // }, 100);

  }

  aracDuzenle(arac: Car): void {
    this.selectedCar.set(arac);
    console.log(this.selectedCar());
    this.visibleForm.set(true);

  }

  aracDuzenleForm(id: number): void {
    //kontrol edip id varsa form sayfasına yönlendireceğiz

    this.route.navigate(['car/form', id]);

  }


  updateCar(updatedCar: Car): void {
    debugger;
    console.log('Selected Car:', this.selectedCar());
    this.list.update((cars) => cars.map(car => car.id === updatedCar.id ? updatedCar : car));
    // this.selectedCar.update((car) => ({ ...updatedCar }));

  }
}
