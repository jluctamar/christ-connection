import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list'; 
import { VerseService } from 'src/app/services/verseService';
import { BrowserModule } from '@angular/platform-browser';








@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
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
    MatTooltipModule,
    MatListModule
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
    MatTooltipModule,
    MatListModule
  ],
  providers: [VerseService]
})
export class SharedModule { }
