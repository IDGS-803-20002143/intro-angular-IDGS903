import {Pipe, PipeTransform} from '@angular/core';
import { IAlumnos } from './ievn/ievn';

@Pipe({
    name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform