import { NgModule } from "@angular/core";

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
    imports : [ MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatGridListModule, MatButtonModule ],
    exports : [ MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatGridListModule, MatButtonModule ]
})

export class MyMaterialModule{}
