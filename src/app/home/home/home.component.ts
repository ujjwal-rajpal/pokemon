import { Component, OnInit, HostListener, } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, timeout } from 'rxjs/operators';
import { ApiService } from '../../core/service/api.service'
import { GlobalConstants } from '../../include/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
     if(pos == max ){ 
      setTimeout(()=>{
        this.offset = this.offset+20;
        this.limit = this.limit+20;
        this.getPokemonList(this.offset,this.limit)
      }, 2000)
     }}
  private subscription
  public totalPokemon :number;
  public offset: number=0;
  public limit: number=20;
  public pokemonList =[];
  public loadPokemon:boolean = true

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isTabletset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private apiService: ApiService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.getPokemonList(this.offset,this.limit)
  }

  getPokemonList(offset, limit){
      if(offset <= this.totalPokemon || this.totalPokemon === undefined)
      this.subscription =  this.apiService.get(GlobalConstants.listPokemon,offset,limit).subscribe(result =>{
        this.totalPokemon = result.count;
        this.pokemonList.push.apply(this.pokemonList,result.results);
         console.log(result.count);
       })
  }

}
