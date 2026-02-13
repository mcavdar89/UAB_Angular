import { Injectable } from '@angular/core';
import { Urun } from './urun.model';

@Injectable({
  providedIn: 'root',
})
export class ListService {

  getUrunListesi(): Urun[] {
    return [
      { id: 1, ad: 'Ürün 1', fiyat: 100, stok: 10 },
      { id: 2, ad: 'Ürün 2', fiyat: 200, stok: 5 },
      { id: 3, ad: 'Ürün 3', fiyat: 300, stok: 8 },
    ];
  }

}
