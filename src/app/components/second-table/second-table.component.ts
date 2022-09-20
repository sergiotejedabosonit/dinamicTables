import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.css']
})
export class SecondTableComponent implements OnInit {

  @ViewChild('table') table: Table | undefined;

  constructor(
    private ps: PokeService
  ) {
    console.log(this.pokemons.length)
    if(this.pokemons.length > 1000){return} else {}
    this.ps.allPokemon$.subscribe(resp =>{console.log(resp); this.pokemons = resp; if(resp.length !== 0){this.loading = true} })
    this.ps.getAllPokemons()
    
   }

  ngOnInit(): void {
   
  }

  pokemons: any[] = [];

  first = 0;
 
  rows = 5;

  loading = false

 
  
  // next() {
  //     this.first = this.first + this.rows;
  // }

  // prev() {
  //     this.first = this.first - this.rows;
  // }

  // reset() {
  //     this.first = 0;
  // }

  // isLastPage(): boolean {
  //     return this.pokemons ? this.first === (this.pokemons.length - this.rows): true;
  // }

  // isFirstPage(): boolean {
  //     return this.pokemons ? this.first === 0 : true;
  // }

  clear(table: Table) {
    table.clear();
}

 

getEventValue($event:any) :string {
  return $event.target.value;
} 
}
