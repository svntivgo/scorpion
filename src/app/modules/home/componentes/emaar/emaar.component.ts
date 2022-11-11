import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emaar',
  templateUrl: './emaar.component.html',
  styleUrls: ['./emaar.component.scss']
})
export class EmaarComponent implements OnInit {
  enteroCompradoresFelices:number = 0;
  decimalFelices:number = 0;
  enteroCompradoresEAU:number = 0;
  decimalEAU:number = 0;
  enteroCompletadas:number = 0;
  decimalCompeltadas:number = 0;
  constructor() { }
  felicescountstop:any = setInterval(()=>{
    this.enteroCompradoresFelices++;
    //we need to stop this at  particular point; will use if condition
    if(this.enteroCompradoresFelices == 81)
    {
      //clearinterval will stop tha function
      clearInterval(this.felicescountstop);
    }

  },25) //10 is milisecond you can control it
  decimalFelicesStop:any = setInterval(()=>{
    
    this.decimalFelices++;
    //we need to stop this at  particular point; will use if condition
    if(this.decimalFelices == 600)
    {
      //clearinterval will stop tha function
      clearInterval(this.decimalFelicesStop);
    }

  },1)

  EAUcountstop:any = setInterval(()=>{
    this.enteroCompradoresEAU++;
    //we need to stop this at  particular point; will use if condition
    if(this.enteroCompradoresEAU == 56)
    {
      //clearinterval will stop tha function
      clearInterval(this.EAUcountstop);
    }

  },65) //10 is milisecond you can control it
  decimalEAUStop:any = setInterval(()=>{
    
    this.decimalEAU++;
    //we need to stop this at  particular point; will use if condition
    if(this.decimalEAU == 888)
    {
      //clearinterval will stop tha function
      clearInterval(this.decimalEAUStop);
    }

  },1)
  completadaststop:any = setInterval(()=>{
    this.enteroCompletadas++;
    //we need to stop this at  particular point; will use if condition
    if(this.enteroCompletadas == 93)
    {
      //clearinterval will stop tha function
      clearInterval(this.completadaststop);
    }

  },30) //10 is milisecond you can control it
  decimalCompletadasStop:any = setInterval(()=>{
    
    this.decimalCompeltadas++;
    //we need to stop this at  particular point; will use if condition
    if(this.decimalCompeltadas == 680)
    {
      //clearinterval will stop tha function
      clearInterval(this.decimalCompletadasStop);
    }

  },1)
  ngOnInit(): void {
  }

}
