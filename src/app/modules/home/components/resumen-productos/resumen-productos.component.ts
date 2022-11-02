import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-productos',
  templateUrl: './resumen-productos.component.html',
  styleUrls: ['./resumen-productos.component.scss']
})
export class ResumenProductosComponent implements OnInit {

  constructor(Router: Router) { }

  ngOnInit(): void {
  }

}
