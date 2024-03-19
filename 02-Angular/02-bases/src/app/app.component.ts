import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

  public increaseby(value: number):void{
    this.counter+= value
  }
  public decreaseby(value: number):void{

    this.counter <= 0 ?
    this.counter = 0 : this.counter-=value
  }

  public reset():void{
    this.counter = 10
  }
}
