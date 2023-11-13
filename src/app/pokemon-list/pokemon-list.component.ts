import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemonList = [
    { name: 'Bulbasaur', type: 'Hierba', Peso:'6.9 KG', image: '../assets/bulbasaur.png' },
    { name: 'Ivysaur', type: 'Hierba', Peso:'13 KG', image: '../assets/ivysaur.png' },
    { name: 'Venusaur', type: 'Hierba', Peso:'100 KG', image: '../assets/venusaur.png' },
    { name: 'Charmander', type: 'Fuego', Peso:'8.5 KG', image: '../assets/charmander.png' },
    { name: 'Charmeleon', type: 'Fuego', Peso:'19 KG', image: '../assets/charmeleon.png' },
    { name: 'Charizard', type: 'Fuego', Peso:'90.5 KG', image: '../assets/charizard.png' },
    { name: 'Squirtle', type: 'Agua', Peso:'9 KG', image: '../assets/squirtle.png' },
    { name: 'Wartortle', type: 'Agua', Peso:' 22,5 KG', image: '../assets/wartortle.png' },
    { name: 'Blastoise', type: 'Agua', Peso:'85.5 KG', image: '../assets/blastoise.png' },
    
  ];
}
