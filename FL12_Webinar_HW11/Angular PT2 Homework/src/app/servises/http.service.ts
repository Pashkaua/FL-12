import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("http://localhost:3000/users");
  }

  postData(user: User) {
    this.http.post<any>("http://localhost:3000/users", user).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  deleteUser(id: number) {
    return this.http.delete<any>("http://localhost:3000/users/" + id).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  upateUser(id: number, user: User) {
    return this.http
      .put<User>("http://localhost:3000/users/" + id, user)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}
