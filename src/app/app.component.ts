import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'LEGAL NOW';
  show: boolean=true;
  cursos:Array <any>=[{
    tipo: "derecho  de Pensiones",
    nombre: "Curso de traslado de regimen pensional"
  },
  {
    tipo: "derecho Penal",
    nombre: "Curso de casacion penal",
    precio:29.00
  },
  {
    tipo: "derecho economico",
    nombre: "Curso de derecho financiero",
    precio:45000
  }
];
}
