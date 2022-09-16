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
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20').subscribe((resp: any) => { 
    resp.results.forEach((element: any) => this.getInfoPokemon(element.url)); 
    this._allPokemon.next(this.allPokemon)
  }) }


  getInfoPokemon(url: string){
    this.http.get(url).subscribe((resp: any) => {this.allPokemon.push(resp) })
  }

}
