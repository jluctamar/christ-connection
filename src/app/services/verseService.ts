import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { VERSE_API_URL, VERSE_API_AUTH_TOKEN, RANDOM_VERSE_API_URL } from "../app.constants";
import { Observable } from "rxjs";

export interface passage {
  [key: string]: string;
}

@Injectable()
export class VerseService {
  incomingVerse;
  passages: passage[] = [
    {
      key: "John 3:16",
      value: `For God so loved the world, that he gave his
                                one and only Son, that whosoever believes in Him shall not
                                perish but have everlasting life.  `
    },
    {
      key: "John 1:1",
      value:
        "In the beginning was the Word and the Word was with God, and the Word was God"
    },
    {
      key: "John 1:12",
      value: ` But as many as received Him, 
                                 to them He gave the right to become children of God,
                                 even to those who believe in His name`
    },
    {
      key: "John 3:5",
      value: `Jesus answered, "Truly, truly, I say to you, 
                                unless one is born of water and the Spirit he cannot enter into the kingdom of God.`
    },
    {
      key: "Matthew 11:28",
      value: `Then Jesus said, “Come to me, all of you who are weary and carry heavy burdens,
                                 and I will give you rest.`
    }
  ];
  constructor(private httpClient: HttpClient) {}

  public displayPassage() {
    const random = Math.floor(Math.random() * 5);
    const verse = this.passages[random];
    this.incomingVerse = verse.value;
    return verse;

    // let temp;
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //         if (xhr.readyState == XMLHttpRequest.DONE) {
    //                 console.log(xhr);

    //         }

    // }
    // xhr.open('GET', 'http://labs.bible.org/api/?passage=random', true);
    // xhr.send();

    // console.log(xhr.responseText.toString())
    // if (temp !== null) {
    //         return temp;
    // } else {
    //         return `For God so soved the world, that he gave his
    //                 one and only Son, that whosoever believes in Him shall not
    //                 perish but have everlasting life.  `
    // }
  }

  getPassage(verse: string): Observable<any> {
    // generate a random verse OR pass it into the method as a parameter
    let specificVerse = verse;

    // construct the params object with appropriate options
    let headers = new HttpHeaders().set(
      "Authorization",
      "Token " + VERSE_API_AUTH_TOKEN
    );
    let params = new HttpParams()
      .set("q", specificVerse)
      .set("include-headings", "false")
      .set("include-footnotes", "false")
      .set("include-verse-numbers", "false")
      .set("include-short-copyright", "false")
      .set("include-passage-references", "false");

    // call the proper http verb
    return this.httpClient.get<any>(VERSE_API_URL, {
      headers: headers,
      params: params
    });
  }

  getRandomPassage(): Observable<any> {
    // call the proper http verb
    return this.httpClient.get<any>(RANDOM_VERSE_API_URL);
  }
}
