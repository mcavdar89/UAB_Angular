import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  private readonly http = inject(HttpClient);


  getCarList(): Observable<Car[]> {
    return this.http.get('http://localhost:5100/api/Vehicle/getvehiles') as Observable<Car[]>;
  }


}
