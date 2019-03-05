import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular Pipes';

  dn:Date = new Date();

  salaire:Number=2000.45;

  texte:string = "Nom mais dis donc vous la";

  repeat:number=2;

  incrementer():void{
    this.repeat++;
  }
}
