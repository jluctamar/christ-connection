import { Component, OnInit } from '@angular/core';
import { passage, VerseService } from 'src/app/services/verseService';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  passage: passage = null;
  test: string = "";
  passageSelectionArr = ["Genesis 3:20", "Genesis 1:1-3", "Genesis 2:7", "1 John 3:4", "Ephesians 2:10", "2 Timothy 3:16", "Psalms 119:9", "1 timothy 1:15",
    "2 Corinthians 3:17", "Isaiah 55:6-7", "John 3:16", "John 1:1", "John 1:12", "John 3:5", "Matthew 11:28",];

  constructor(private verseService: VerseService) {}

  ngOnInit() {
    this.onDisplayPassage()
  }

  onDisplayPassage() {
    //this.passage = this.verseService.displayPassage();

    let verse = this.passageSelectionArr[Math.floor(Math.random() * this.passageSelectionArr.length)];
    this.verseService.getPassage(verse).subscribe((passage) => {
      // format the string by removing unwanted characters 
      this.test = JSON.stringify(passage.passages)
        .replace("[", "")
        .replace("]", "")
        .replace(/\\n/g, ""); // removes newline character
    });
  }

  displayRandomPassage() { // NOTE this API call is limited to 10 calls per hour.
    //this.passage = this.verseService.displayPassage();
    this.verseService.getRandomPassage().subscribe((passage) => {
      // format the string by removing unwanted characters 
      this.test = JSON.stringify(passage.contents.verse)
    });
  }
}
