import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { PropiedadesComponent } from './modules/home/componentes/propiedades/propiedades.component';
import { RayaComponent } from './modules/home/componentes/raya/raya.component';
import { UrbanaComponent } from './modules/home/componentes/urbana/urbana.component';
import { OraniaComponent } from './modules/home/componentes/orania/orania.component';
import { HillsParkComponent } from './modules/home/componentes/hills-park/hills-park.component';
import { EmaarComponent } from './modules/home/componentes/emaar/emaar.component';

const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch:'full'},
  { path: 'inicio', component: HomeComponent },
  { path: 'propiedades', component: PropiedadesComponent },
  { path: 'raya', component: RayaComponent },
  { path: 'urbana', component: UrbanaComponent},
  { path: 'orania', component: OraniaComponent },
  { path: 'hillsPark', component: HillsParkComponent },
  { path: 'emaar', component: EmaarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
