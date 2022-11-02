import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ResumenProductosComponent } from './components/resumen-productos/resumen-productos.component';
import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';
import { RayaComponent } from './componentes/raya/raya.component';
import { UrbanaComponent } from './componentes/urbana/urbana.component';
import { OraniaComponent } from './componentes/orania/orania.component';
import { HillsParkComponent } from './componentes/hills-park/hills-park.component';
import { EmaarComponent } from './componentes/emaar/emaar.component';
import { PorqueComponent } from './components/porque/porque.component';
import { FooterComponent } from './components/footer/footer.component';
import { BotonesComponent } from './components/botones/botones.component';



@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    AcercaComponent,
    ResumenProductosComponent,
    PropiedadesComponent,
    RayaComponent,
    UrbanaComponent,
    OraniaComponent,
    HillsParkComponent,
    EmaarComponent,
    PorqueComponent,
    FooterComponent,
    BotonesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
