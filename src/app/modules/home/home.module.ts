import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ResumenProductosComponent } from './components/resumen-productos/resumen-productos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PropiedadesComponent } from './componentes/propiedades/propiedades.component';
import { RayaComponent } from './componentes/raya/raya.component';
import { UrbanaComponent } from './componentes/urbana/urbana.component';
import { OraniaComponent } from './componentes/orania/orania.component';
import { HillsParkComponent } from './componentes/hills-park/hills-park.component';
import { EmaarComponent } from './componentes/emaar/emaar.component';
import { PorqueComponent } from './components/porque/porque.component';



@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    AcercaComponent,
    ResumenProductosComponent,
    NavbarComponent,
    PropiedadesComponent,
    RayaComponent,
    UrbanaComponent,
    OraniaComponent,
    HillsParkComponent,
    EmaarComponent,
    PorqueComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
