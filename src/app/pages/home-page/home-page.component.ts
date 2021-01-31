import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerseService } from 'src/app/services/verseService';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private verseService: VerseService, private router: Router) { }

  ngOnInit() {

  }

  goToAboutUs(){
    this.router.navigate(['about']);
  }
}
