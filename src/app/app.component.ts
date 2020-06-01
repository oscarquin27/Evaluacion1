import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Practica';
  arr : any = [{"Nombre": "Pepe", "Edad" : 18}, 
              {"Nombre": "Juan", "Edad" : 38}, 
              {"Nombre": "Maria", "Edad":50}]; //Array de objetos
  contador : number = 0;
  //key-value pair
  ngOnInit(){
    this.arr[0].Nombre;
    this.arr[0].Edad;
    console.log("Valores originales", this.arr[0].Nombre, this.arr[0].Edad);
    

    this.arr[0].Nombre = "Pepito";
    this.arr[0].Edad = 25;

    console.log("Cambiado",this.arr[0].Nombre, this.arr[0].Edad);
  }

  insertarPersona(){
    this.contador += 1;
    this.contador > 1 ? null :  this.arr.push({"Nombre" : "Pedro","Edad" : 45});
  }

}
