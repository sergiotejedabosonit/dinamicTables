import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  Allpokemon: any[] = [];

  AllPokemonFiltered: any[] = []

  types: any[] = [];

  experience: any ;

  loading: boolean = true;

  activityValues: number[] = [0, 5];

  pokemonSearch: string = ''

  constructor(
    private ps: PokeService
  ) { }

  ngOnInit(): void {

    this.ps.getAllPokemons()
    
    this.ps.allPokemon$.subscribe(resp => {
      this.Allpokemon = resp;
      this.AllPokemonFiltered = resp
      this.loading = false; 
    })
    
    
    
    this.types = [
  { label: 'Grass', value: 'grass' },
  { label: 'fire', value: 'fire' },
  { label: 'water', value: 'water' },
  { label: 'bug', value: 'bug' }
]

 
   }

   filterOne(event: any){ 
    if(event.length !== 0){
    let newArray: any[] = []
  
    this.loading = true
      event.map( (e: any,i: any) => {
        console.log(i)
       
      newArray.push(...this.Allpokemon.filter((elem: any) =>{
        console.log( elem.types[0].type.name);
        console.log(e.value)
        console.log('-')
        
       return elem.types[0].type.name === e.value}))
       
     
      })
      this.AllPokemonFiltered = []
      this.AllPokemonFiltered = newArray
this.loading = false
    } else {
      this.loading = true;
      this.AllPokemonFiltered = this.Allpokemon
      this.loading = false
    }
   }

// table 

searchPokemon(){
  console.log(this.pokemonSearch)
  if (this.pokemonSearch !== '') {
    console.log(this.Allpokemon.filter(e => e.name.includes(this.pokemonSearch) === true))
    this.AllPokemonFiltered = this.Allpokemon.filter(e => e.name.includes(this.pokemonSearch) === true)
  } else {
    this.AllPokemonFiltered = this.Allpokemon
  }
}

// ngOnInit() {
//     this.customerService.getCustomersLarge().then(customers => {
//         this.customers = customers;


//         this.customers.forEach(customer => customer.date = new Date(customer.date));
//     });

//     this.representatives = [
//         {name: "Amy Elsner", image: 'amyelsner.png'},
//         {name: "Anna Fali", image: 'annafali.png'},
//         {name: "Asiya Javayant", image: 'asiyajavayant.png'},
//         {name: "Bernardo Dominic", image: 'bernardodominic.png'},
//         {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
//         {name: "Ioni Bowcher", image: 'ionibowcher.png'},
//         {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
//         {name: "Onyama Limba", image: 'onyamalimba.png'},
//         {name: "Stephen Shaw", image: 'stephenshaw.png'},
//         {name: "Xuxue Feng", image: 'xuxuefeng.png'}
//     ];

//     this.statuses = [
//         {label: 'Unqualified', value: 'unqualified'},
//         {label: 'Qualified', value: 'qualified'},
//         {label: 'New', value: 'new'},
//         {label: 'Negotiation', value: 'negotiation'},
//         {label: 'Renewal', value: 'renewal'},
//         {label: 'Proposal', value: 'proposal'}
//     ]
// }

clear(table: Table) {
  table.clear();
}

}
