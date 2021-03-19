import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentLessonTheme } from 'src/app/interfaces/bible-study.interface';
import { VerseService } from 'src/app/services/verseService';
import { SlideUpAnimation} from 'src/app/shared/animations';
import * as CurrentLessonData from 'src/app/shared/curr-lesson-data.json';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations:[SlideUpAnimation]
})
export class HomePageComponent implements OnInit {
  currentLesson: CurrentLessonTheme = (CurrentLessonData as any).default;

  constructor(private verseService: VerseService, private router: Router) { }

  ngOnInit(): void {

  }

  goToAboutUs(): void {
    this.router.navigate(['about']);
  }
  goToBibleStudy(): void{
    this.router.navigate(['bible-study']);
  }
}
