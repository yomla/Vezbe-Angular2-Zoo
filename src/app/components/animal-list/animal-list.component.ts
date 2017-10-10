import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animal.model';
import { Sector } from '../../models/sector.model';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

   animals: any[];
   sectors: any[];

   sector: Sector = new Sector('Unknown','Unknown');
   newAnimal: Animal = new Animal('','','', this.sector);

  constructor() { 
    this.animals = [
      new Animal ('Dog', 'Ben', '21-12-2012', this.sector),      
      new Animal ('Cat', 'Cloe', '21-12-2012', this.sector),
      new Animal ('Fish', 'Nemo', '21-12-2012', this.sector)	
    ];
    
    this.sectors = [  
      new Sector ('Water-animals', 'Water'),
      new Sector ('Fawl','Kages'),
      new Sector ('Predators', 'Kages')	
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
  
  addAnimal() {
      this.animals.push(this.newAnimal);
      this.newAnimal = new Animal('','','', this.sector);
  }

  ngOnInit() {
  }

}
