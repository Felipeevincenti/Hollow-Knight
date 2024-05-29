import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  public personaje: any;

  ngOnInit(): void {

    window.scrollTo(0, 0);

    const personajeSessionStorage = sessionStorage.getItem('personaje');

    try {
      const personaje = personajeSessionStorage ? JSON.parse(personajeSessionStorage) : null;
      this.personaje = personaje;
    } catch {
      console.log("Error en la obtencion del personaje");
    };

  };

  esString(recompensa: any): boolean {
    return typeof recompensa === 'string';
  }

  esNumero(recompensa: any): boolean {
    return typeof recompensa === 'number';
  }

};
