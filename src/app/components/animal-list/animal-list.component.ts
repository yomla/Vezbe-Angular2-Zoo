import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  private animals: any[];

  constructor() { 
    this.animals = [
			{
				species: 'Dog',
				name: 'Ben',				
				dateOfBirth: '12-12-2012'
			},

			{
				species: 'Cat',
				name: 'Cloe',				
				dateOfBirth: '05-05-2010'
			},

			{
				species: 'Parot',
				name: 'Jargo',				
				dateOfBirth: '24-02-2015'
			},

			{
				species: 'Fish',
				name: 'Nemo',				
				dateOfBirth: '08-08-2016'
			},
			{
				species: 'Horse',
				name: 'Thunder',				
				dateOfBirth: '12-09-2009'
			}

		];
  }

  ngOnInit() {
  }

}
