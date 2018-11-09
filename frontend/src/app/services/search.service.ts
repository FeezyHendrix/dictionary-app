import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {
  url = 'https://lexiconx.herokuapp.com/search_word/';

  constructor(public http: Http) { }
  
  search(word: string){
    return this.http.get(this.url + word);
  }
}
