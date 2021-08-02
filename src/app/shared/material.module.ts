import { NgModule } from "@angular/core";

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';



@NgModule({
    imports : [ MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatGridListModule, MatButtonModule, MatProgressSpinnerModule, MatInputModule ],
    exports : [ MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatCardModule, MatGridListModule, MatButtonModule, MatProgressSpinnerModule, MatInputModule ]
})

export class MyMaterialModule{}
