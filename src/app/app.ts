import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Orneklist } from './orneklist/orneklist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Orneklist],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UAB.AracKiralama.WEb.UI');
}
