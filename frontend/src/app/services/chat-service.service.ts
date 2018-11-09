import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserMessage } from '../models/message';
@Injectable()
export class ChatServiceService {

  url: string = 'http://localhost:5000/send_message';
  message: any[];
  userMessage: UserMessage;

  constructor(public http: Http ) { }


  sendMessage(message){
    this.userMessage = {
      id : 1,
      content : message
    };

   return this.http.post(this.url + this.userMessage, this.userMessage )
  }
}
