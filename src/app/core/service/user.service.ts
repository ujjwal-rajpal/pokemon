import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { Search } from '../model/search.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private SearchPokemonSubject = new BehaviorSubject<Search>({} as Search);

  addSearchData(param){
    this.SearchPokemonSubject.next(param)
  }

  getData(): Observable<any> {
    return this.SearchPokemonSubject;
  }
}
