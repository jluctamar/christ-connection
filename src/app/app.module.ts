import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerseService } from './services/verseService';
import { SharedModule } from './shared/shared/shared.module';
import { NavBarComponent } from './shared/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent, NavBarComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [VerseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
