import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';


import {MatRadioModule} from '@angular/material/radio'; 
import { VerseService } from 'src/app/services/verseService';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule,
    MatRadioModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule,
    MatRadioModule,
  ],
  providers: [VerseService]
})
export class SharedModule { }
