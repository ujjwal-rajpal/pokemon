import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from '../../core/service/api.service'
import { GlobalConstants } from '../../include/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private subscription
  public totalPokemon :number;
  public offset: number=0;
  public limit: number=20;
  public pokemonList

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
    console.log(this.isTabletset$);
    console.log(this.isHandset$);
   this.subscription =  this.apiService.get(GlobalConstants.listPokemon,this.offset,this.limit).subscribe(result =>{
     this.totalPokemon = result.count;
     this.pokemonList = result.results;
      console.log(result.count);
    })
  }

}
