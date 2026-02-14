import { Component, input, OnInit, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-car-form',
  imports: [FormField],
  templateUrl: './car-form.html',
  styleUrl: './car-form.scss',
})
export class CarForm implements OnInit {
  car = input.required<Car>();
  _car = signal<Car>({} as Car);
  form = form(this._car, (schemaPath) => {
    required(schemaPath.brandAd, { message: 'Brand is required' });
    required(schemaPath.modelAd, { message: 'Model is required' });
    required(schemaPath.plate, { message: 'Plate is required' });

    // email(schemaPath.plate, { message: 'Plate must be a valid email' });

  });


  ngOnInit(): void {
    this._car.set(this.car());
    // Initialization logic here
  }


  kaydet(): void {
    if (this.form().valid()) {
      // Save logic here
    }
    else{
      console.log("Form is invalid. Please fill in all required fields.");
    }
  }

}
