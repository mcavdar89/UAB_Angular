import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UAB.AracKiralama.WEb.UI');

  authService = inject(AuthService);

  isLogin = computed(() => this.authService.isAuthenticated());


  route = inject(Router);


  /**
   *
   */
  constructor() {
    effect(() => {

      if (!this.isLogin()) {
        this.route.navigate(['/auth', 'login']);

      }

    });

  }


}
