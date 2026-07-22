import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { Persona } from '../../persona.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number;

  constructor(
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El índice es: ' + indice)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      let persona: Persona = 
        this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  guardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){
      this.personasService.modificarPersona(this.index, persona1);
    }
    else{
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }
}
