import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  constructor(public alertController: AlertController) {}
  public recurrentIndex: number;
  addresses = [
    {
      address: 'Montes Urales 754, Lomas de Chapultepec II Sección',
      recurrent: true,
    },
    {
      address: 'Av. Fundidora #501, Col. ObreraMonterrey, N.L',
    },
    {
      address:
        'Local 18 Plaza Paseo Tec II, Av. Eugenio Garza Sada Sur 2408, Roma, 64700 Monterrey, N.L.',
    },
    {
      address: '298 Hanson Ranch Rd, Vail, CO 81657, Estados Unidos',
    },
    {
      address: 'Montes Urales 754, Lomas de Chapultepec II Sección',
    },
  ];
  ngOnInit() {
    this.addresses.forEach((address, index) => {
      if (address.recurrent) {
        this.recurrentIndex = index;
      }
    });
  }
  setRecurrent(i) {
    console.log(i);
    this.presentAlertMultipleButtons(i);
  }
  async presentAlertMultipleButtons(index) {
    let message =
      '¿Quieres seleccionar <strong>' +
      this.addresses[index].address +
      '</strong> como dirección recurente?';
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Farmacias Sanate',
      subHeader: 'Dirección recurrente',
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.addresses[this.recurrentIndex].recurrent = false;
            this.addresses[index].recurrent = true;
            this.recurrentIndex = index;
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
