import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
    private personaService: PersonasService){}

  ngOnInit(): void {
   this.personas = this.personaService.personas;
  }
}
