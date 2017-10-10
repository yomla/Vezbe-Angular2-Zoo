import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  private animals: any[];

  constructor() { 
    this.animals = [
      new Animal ('Dog', 'Ben', '21-12-2012'),      
      new Animal ('Cat', 'Cloe', '21-12-2012'),
      new Animal ('Fish', 'Nemo', '21-12-2012')	
		];
  }

  remove(animal) {
		const index = this.animals.indexOf(animal);
		this.animals.splice(index,1);
  }
  
  moveToTop(animal) {
		this.remove(animal);
		this.animals.unshift(animal);
	}

  ngOnInit() {
  }

}
