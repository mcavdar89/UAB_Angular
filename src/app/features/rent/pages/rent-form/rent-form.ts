import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePicker } from '../../../../shared/components/date-picker/date-picker';
import { Dropdown } from '../../../../shared/components/dropdown/dropdown';
import { Car } from '../../../car/models/car.model';
import { CarService } from '../../../car/services/car.service';
import { RentModel } from '../../models/rent.model';

@Component({
  selector: 'app-rent-form',
  imports: [InputTextModule, ButtonModule, SelectModule, Dropdown, DatePicker, JsonPipe],
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


  carService = inject(CarService);


  constructor() {

  }

  ngOnInit(): void {

    this.carService.getCarList().subscribe((response) => {
      this.carList.set(response);
    });


    // Initialization logic here
  }
}
