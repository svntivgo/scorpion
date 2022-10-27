import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ResumenProductosComponent } from './components/resumen-productos/resumen-productos.component';



@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    AcercaComponent,
    ResumenProductosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
