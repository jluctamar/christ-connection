import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { VERSE_API_URL, VERSE_API_AUTH_TOKEN, RANDOM_VERSE_API_URL } from "../app.constants";
import { Observable } from "rxjs";

export interface passage {
  reference: string;
  text: string;
}

@Injectable()
export class VerseService {
  incomingVerse;

  constructor(private httpClient: HttpClient) {}

  public displayPassage() {

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
