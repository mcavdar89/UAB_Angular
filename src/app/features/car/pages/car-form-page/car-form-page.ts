import { Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { map } from 'rxjs';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-form-page',
  imports: [FormField, InputTextModule, ButtonModule],
  templateUrl: './car-form-page.html',
  styleUrl: './car-form-page.scss',
})
export class CarFormPage implements OnInit {


  car = signal<Car>({
    id: 0,
    brandAd: '',
    modelAd: '',
    plate: ''
  } as Car);

  form = form(this.car, (schemaPath) => {
    required(schemaPath.brandAd, { message: 'Brand is required' });
    required(schemaPath.modelAd, { message: 'Model is required' });
    required(schemaPath.plate, { message: 'Plate is required' });
    minLength(schemaPath.modelAd, 4, { message: 'Model must be at least 4 characters long' });

    // email(schemaPath.plate, { message: 'Plate must be a valid email' });

  });


  service = inject(CarService);

  route = inject(ActivatedRoute);
  //snapshot için kullanılır
  //id :number = 0;

  id = toSignal(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id')))
    )
  )


  constructor() {
  }
  ngOnInit(): void {
    //artıkbu yapı değişti signla ile alacağım
    // this.id = Number(this.route.snapshot.paramMap.get('id'));

    debugger;

    this.service.getCarById(this.id()!).subscribe(response => {
      if (response.isSuccess && response.data) {
        this.car.set(response.data);
      }
    });




  }




}
