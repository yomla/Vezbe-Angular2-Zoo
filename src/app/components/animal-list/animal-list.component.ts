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
   sectors = [];
   sector: Sector = new Sector('Unknown', 'Unknown'); 
   newAnimal: Animal = new Animal('','','', this.sectors[0]);

  constructor() { 
    this.sectors = [  
      new Sector ('Water-animals', 'Water'),
      new Sector ('Fawl','Kages'),
      new Sector ('Predators', 'Kages')	
    ];

    this.animals = [
      new Animal ('Dog', 'Ben', '21-12-2012', this.sectors[2]),    
      new Animal ('Cat', 'Cloe', '21-12-2012', this.sectors[1]),
      new Animal ('Fish', 'Nemo', '21-12-2012', this.sectors[0])	
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
    this.newAnimal = new Animal('','','', this.sectors[0]);
  }

  showAnimalsBySector(sector) {	
		const animalsList=[];		
		this.animals.forEach(function(animal) {
			if(animal.sector && animal.sector.name === sector.name) 
				animalsList.push(animal.name + '-' + animal.species); 
		});		
		alert(animalsList.toString());
	}
  ngOnInit() {
  }

}
