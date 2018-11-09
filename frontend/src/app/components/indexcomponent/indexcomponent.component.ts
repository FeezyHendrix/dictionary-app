import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ChatServiceService } from '../../services/chat-service.service';

@Component({
  selector: 'app-indexcomponent',
  templateUrl: './indexcomponent.component.html',
  styleUrls: ['./indexcomponent.component.css']
})
export class IndexcomponentComponent implements OnInit {
  word: string;
  definition: any[];
  suggestion: boolean = false;
  suggestiondata: any[];
  showChat: boolean = false;
  message:string = '';

  constructor(private search: SearchService, private chatService: ChatServiceService) { }


  ngOnInit() {
  }
  openchat(){
    this.showChat == false ?  this.showChat = true :  this.showChat = false ;
   }
  searchWord(){
    this.search.search(this.word).toPromise()
    .then((res) => {
      let data = res.json()
      if(data.status == 200){
        this.definition = data.data.definition;
        this.suggestion = false;
      }
      else if(data.status == 160){
        this.suggestion = true;
        this.suggestiondata = data.data;
      }
      else{
       alert(data.data);
      }
    })
  }
  searchSuggestion(word){
    this.word = word;
    this.searchWord();
  }
  sendMessage(){
    this.chatService.sendMessage(this.message).toPromise()
    .then((res) => console.log(res));  
  }

}
