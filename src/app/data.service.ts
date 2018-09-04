import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('./assets/users.json/')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
    // return this.http.get('./assets/user.json/1')
  }

  getPosts() {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.http.get('./assets/posts.json/')
  }

}
