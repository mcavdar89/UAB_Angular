import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ListService } from './list.service';
import { Urun } from './urun.model';

@Component({
  selector: 'app-orneklist',
  imports: [FormsModule, TableModule, ButtonModule],
  templateUrl: './orneklist.html',
  styleUrl: './orneklist.scss',
})
export class Orneklist implements OnInit {

  aramaMetni = signal('');

  cdr = inject(ChangeDetectorRef);


  list = signal<Urun[]>([]);

  _servis = inject(ListService);

  //önceden constructor ile inject edilen servis, artık inject fonksiyonu ile inject ediliyor. Bu sayede constructor tanımlamaya gerek kalmıyor.
  //constructor(private _servis: ListService) { }
  ngOnInit(): void {
    this.list.set(this._servis.getUrunListesi());
  }


  sepeteEkle(urun: Urun): void {
    urun.stok = urun.stok ? urun.stok - 1 : 0; //stok bilgisini güncelliyoruz. Eğer stok bilgisi varsa 1 azaltıyoruz, yoksa 0 olarak kalıyor.
    console.log(`${urun.ad} sepete eklendi.`);

    setTimeout(() => {

      urun.stok = urun?.stok! - 1;
      // 1. yöntem signal güncelleme: this.list.set([...this.list()]);
      // this.list.set([...this.list()]);

      //this.cdr.markForCheck(); // 2. yöntem manuel change detection tetikleme: markForCheck() metodu, Angular'ın değişiklik algılama mekanizmasını manuel olarak tetikler. Bu sayede stok bilgisindeki değişiklikler anında kullanıcı arayüzüne yansır.

    }, 2000);


  }


  ara(): void {
    this.list.update((urunler) => urunler.filter((urun) => urun.ad.toLowerCase().includes(this.aramaMetni().toLowerCase())));
  }



}
