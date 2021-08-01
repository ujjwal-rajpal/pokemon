import { NgModule } from "@angular/core";

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
    imports : [ MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule ],
    exports : [ MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule ]
})

export class MyMaterialModule{}
