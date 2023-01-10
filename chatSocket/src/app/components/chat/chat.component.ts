import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message$?: Observable<Message>;
  messages: Message[] = [];

  groupId = "";
  messageData = "";
  name = "";
  constructor(private chatService: ChatService) { }
  
  send(){
    const newMessage: Message = {
      id: Date.now().toString(),
      from: this.name,
      content: this.messageData,
      createAt: Date.now(),
      groupId :this.groupId,
    };
    this.chatService.sendMessage(newMessage);
  }


  accessForGroup(){
    this.message$ = this.chatService.getMessageForGroupId(this.groupId);
    this.message$.subscribe((message) => {
      // console.log(message);
      this.messages.push(message);
      console.log(this.messages)
    }); 
  }


  ngOnInit(): void {
  }

}
