import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/core/service/user.service';
import { Search } from 'src/app/core/model/search.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private user: UserService) { }
    // searchPokemon: Search = {"search":"Bulbasaur"}
  ngOnInit(): void {
    
  }
  
  handleKeyDown(event){
    if(event.which != 13)return

    this.user.addSearchData(event.target.value)


  }

}
