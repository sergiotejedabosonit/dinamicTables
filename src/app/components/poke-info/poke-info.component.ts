import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PokeService } from '../../services/poke.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {
  
  info: any = false;
  locations: any = false;
  specie: any = false;

  constructor(
    private ar: ActivatedRoute,
    private ps: PokeService
  ) { }


  ngOnInit(): void {

    this.ar.params.pipe(
      switchMap((params: any) => this.ps.getPokemonById(params.id)),
    ).subscribe(resp => {this.info = resp, console.log(this.info)})

    this.ar.params.pipe(
      switchMap((params: any) => this.ps.getLocationById(params.id)),
    ).subscribe(resp => {this.locations = resp })

    this.ar.params.pipe(
      switchMap((params: any) => this.ps.getPokemonById(params.id)),
      switchMap((resp: any) => this.ps.getSpeciesByPokemon(resp.species.url))
    ).subscribe((resp: any) => {this.specie = resp, console.log(this.specie)})
    
  }

}
