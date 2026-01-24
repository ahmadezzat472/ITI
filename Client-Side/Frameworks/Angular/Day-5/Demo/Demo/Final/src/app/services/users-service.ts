import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../../utils/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
    private readonly base_URL = "http://localhost:3000/users";
    constructor(private http: HttpClient){}

    allUsers(){
      return this.http.get<user[]>(this.base_URL);
    }
    userByID(id: number){
      return this.http.get<user>(`${this.base_URL}/${id}`);
    }
    updateUser(id:number, newUser: user){
      return this.http.put(`${this.base_URL}/${id}`, newUser);
    }

    deleteUser(id:number){
      return this.http.delete(`${this.base_URL}/${id}`);
    }
}
