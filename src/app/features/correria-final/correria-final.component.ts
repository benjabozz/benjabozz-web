import { Component } from '@angular/core';
import { materias } from './content';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-correria-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './correria-final.component.html',
})
export class CorreriaFinalComponent {
  public listaDeMaterias: any = materias;
}
