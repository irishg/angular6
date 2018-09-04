import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from 'ng-connection-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  status = 'CHECK';
  isConnected = true;

  constructor(private http: HttpClient, private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
    })
  }

  getUsers() {
    if (this.status === 'ONLINE'){
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    } else {
      return this.http.get('./assets/users.json/')
    }
  }

  getUser(userId) {
    if (this.status === 'ONLINE'){
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
    } else {
      return this.http.get('./assets/user.json')
    }
  }

  getPosts() {
    if (this.status === 'ONLINE'){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    } else {
      return this.http.get('./assets/posts.json/')
    }
  }

}
