import { Component, OnInit, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Car } from '../../../car/models/car.model';
import { RentModel } from '../../models/rent.model';

@Component({
  selector: 'app-rent-form',
  imports: [FormField, InputTextModule, ButtonModule, SelectModule],
  templateUrl: './rent-form.html',
  styleUrl: './rent-form.scss',
})
export class RentForm implements OnInit {


  carList = signal<Car[]>([] as Car[])


  rent = signal<RentModel>({
    id: 0,
    carId: 0,
    userId: 0,
    rentDate: new Date(),
    returnDate: new Date(),
    amount: 0
  })

  rentForm = form(this.rent);


  constructor() {

  }

  ngOnInit(): void {
    // Initialization logic here
  }
}
