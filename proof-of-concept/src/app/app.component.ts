import { Component } from '@angular/core';
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
  constructor() {
    this.currentUser = {
      name: 'Diego Moreno Acevedo',
      mail: 'diegomx2@hotmail.com',
    };
  }
}
