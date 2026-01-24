import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private readonly BaseURL = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient){}

  allUsers(){
    // return this.http.get<any[]>(this.BaseURL, {observe:"body"});//Default
    // return this.http.get<any[]>(this.BaseURL, {observe:"response"});
    return this.http.get<any[]>(this.BaseURL);//get Body Direct
  }
  userByID(id:number){
    return this.http.get(this.BaseURL+"/"+id);
  }
}
