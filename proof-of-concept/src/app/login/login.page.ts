import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private storage: StorageService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
  login() {
    console.log('login');

    let currentUser = {
      name: 'Diego Moreno Acevedo',
      mail: 'diegomx2@hotmail.com',
    };
    this.storage.set('currentUser', currentUser);
    this.navCtrl.navigateForward(['/productos']);
  }
}
