import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  estado='no ha cargado'
  constructor() {
    window.addEventListener('load', (e) => {
      this.estado = 'cargado'
      console.log(e)
    })
  }
  title = 'scorpion';
}
