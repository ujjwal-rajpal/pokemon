import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, timeout } from 'rxjs/operators';
import { ApiService } from '../../core/service/api.service'
import { UserService } from 'src/app/core/service/user.service';
import { GlobalConstants } from '../../include/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    //In chrome and some browser scroll is given to body tag
    
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if((document.documentElement.scrollTop || document.body.scrollTop) > 0){
      this.fixed = true;
    }else{
      this.fixed = false;
    }
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
  public logo : string;
  public fixed:boolean = false;
  public errorCode: number;
  public errorMessage : String;
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
    private breakpointObserver: BreakpointObserver,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.user.getData().subscribe(data=>{
      console.log(data);
      this.getSinglePokemon(data);
    })
    this.getPokemonList(this.offset,this.limit)
  }

  getPokemonList(offset, limit){
      if(offset <= this.totalPokemon || this.totalPokemon === undefined)
      this.subscription =  this.apiService.get(GlobalConstants.listPokemon,offset,limit).subscribe(result =>{
        this.totalPokemon = result.count;
        this.pokemonList.push.apply(this.pokemonList,result.results);
       }), errorResponse=>{
        this.errorCode = errorResponse.error.messages[0].code;
        this.errorMessage = errorResponse.error.messages[0].message;
        console.log(this.errorMessage)
       }
  }

  getSinglePokemon(searchString){
    this.apiService.getPokemon(GlobalConstants.listPokemon,searchString).subscribe(data=>{
      if(data){
        this.pokemonList=[{name: searchString}]
      }
    }, errorResponse=>{
      console.log(errorResponse)
     }
    )
  }
  ngOnDestroy(){
    this.subscription.unSubscribe();    
  }
}
