import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  pokemones = null

  private _allPokemon = new BehaviorSubject([])
  public allPokemon$ = this._allPokemon.asObservable()


  
  allPokemon: any = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1500').subscribe((resp: any) => { 
    resp.results.forEach((element: any) => this.getInfoPokemon(element.url)); 
    
  }) }


  getInfoPokemon(url: string){
    this.http.get(url).subscribe((resp: any) => {this.allPokemon.push(resp); if(this.allPokemon.length === 1071){this._allPokemon.next(this.allPokemon)} })
  }


  getPokemonById(num: any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
  }
  getLocationById(num: any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${num}/encounters`)
  }
  getSpeciesByPokemon(url: any){
    return this.http.get(url)
  }
}
