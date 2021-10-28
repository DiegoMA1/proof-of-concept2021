import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { StorageService } from './storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Productos', url: '/productos', icon: 'medkit' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Carrito', url: '/carrito', icon: 'cart' },
  ];
  public currentUser: any;
  constructor(private router: Router, private storage: StorageService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log('Navigation changed');

        this.currentUser = this.storage.get('currentUser');
        this.storage.get('currentUser').then((user) => {
          if (user === null) {
            this.currentUser = undefined;
          } else {
            this.currentUser = user;
          }
        });
      }
      if (event instanceof NavigationError) {
        // Present error to user
        console.log(event.error);
      }
    });
  }
  ngOnInit() {
    this.storage.get('currentUser').then((user) => {
      if (user === null) {
        this.currentUser = undefined;
      } else {
        this.currentUser = user;
      }
    });
  }
  ionViewCanEnter() {
    console.log('Will enter fire');
  }
  logout() {
    console.log('logout');
    this.storage.set('currentUser', undefined);
    this.currentUser = undefined;
  }
}
