import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { User } from './main-content/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users :User[];
  subject = webSocket({url:"wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket",
  deserializer: ({data}) => {
    if(data.startsWith("42"))
     return JSON.parse(data.substring(2))[1];
   else 
   return null;
     
  }
 });

  getAll() {
  this.users = [];
	  this.subject.subscribe(
   msg =>{
   // Called whenever there is a message from the server.
		if(msg!=null && msg.results != null){
			msg.results.forEach(r=>{
      this.users.push(r);
      
			});
		}
   },
   err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
   () => console.log('complete') // Called when connection is closed (for whatever reason).
 );
 return this.users;
  }
}