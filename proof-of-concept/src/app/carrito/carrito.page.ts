import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  constructor() {}
  products = [
    {
      name: 'Micardis plus 14 tabletas caja',
      price: 736.5,
      description: 'Telmisartán 80 MG Hidroclorotiazida 25 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_3860282_1d6kgbuu7',
      quantity: 2,
    },
    {
      name: 'Norvas 10 tabletas caja',
      price: 366.5,
      description: 'Besilato de amlodipino 5 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_3580020_1d6itqhcm',
      quantity: 5,
    },
  ];
  ngOnInit() {}
}
