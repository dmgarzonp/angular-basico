import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes: string[] = ['Aquaman','Hulk','Iroman','Thor'];
heroeBorrado: string='';


borraHeroe(){
  console.log('borrando...');
  this.heroeBorrado =  this.heroes.shift() || '';


}

}
