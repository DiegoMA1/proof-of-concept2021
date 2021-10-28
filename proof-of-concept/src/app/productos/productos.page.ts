import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  constructor() {}
  products = [
    {
      name: 'Kitoscell',
      price: 172,
      description: '3.5 G Gel Tubo Fenil metil piridona 8 G',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_6530014_1d6n18os7',
    },
    {
      name: 'CO-DIOVAN 30 TABLETAS CAJA',
      price: 1572,
      description: 'Valsartán 320 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_7080373_1d6n18os7',
    },
    {
      name: 'Postinor unidosis 1 tableta caja',
      price: 110,
      description: 'Levonorgestrel 1.5 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_5640003_1dkmur4ra',
    },
    {
      name: 'Pepto bismol caplets',
      price: 103,
      description: '24 Comprimidos Caja Bismuto 262 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_3750061_1dnq92es8',
    },
    {
      name: 'Diovan comprimidos caja',
      price: 658,
      description: 'Valsartán 160 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_7080232_1d6n18os7',
    },
    {
      name: 'Vick baby balm',
      price: 94.5,
      description: '50 G Ungüento Tarro',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_3750065_1dnq92es8',
    },
    {
      name: 'Singulair 30 comprimidos caja',
      price: 1396,
      description: 'Montelukast 10 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_6890098_1d6n18os7',
    },
    {
      name: 'Micardis plus 14 tabletas caja',
      price: 736.5,
      description: 'Telmisartán 80 MG Hidroclorotiazida 25 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_3860282_1d6kgbuu7',
    },
    {
      name: 'Norvas 10 tabletas caja',
      price: 366.5,
      description: 'Besilato de amlodipino 5 MG',
      img: 'https://assets2.farmaciasanpablo.com.mx/uploads-prod/productimages/Fsp275Wx275H_3580020_1d6itqhcm',
    },
  ];
  order = [];
  ngOnInit() {}
}
