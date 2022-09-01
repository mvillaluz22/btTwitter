import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    exports: [
        // Material Modules
        MatToolbarModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
})
export class MaterialModule { }