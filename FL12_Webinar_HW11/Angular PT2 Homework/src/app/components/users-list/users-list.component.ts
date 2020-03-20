import { Component, OnInit } from "@angular/core";
import { User } from "../../interfaces/user";
import { HttpService } from "../../servises/http.service";
import { Router } from "@angular/router";

@Component({
  selector: "users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  users: any;
  searchValue: string;

  constructor(private _http: HttpService, private router: Router) {}
  ngOnInit(): void {
    this._http.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  deleteUser(user: User): void {
    this._http.deleteUser(user.id);
    this.users = this.users.filter(item => item.id !== user.id);
  }

  usersFiltered() {
    if (this.searchValue) {
      return this.users.filter(user => {
        const regex = RegExp("^" + this.searchValue.trim().toLowerCase() + "");
        return regex.test(user.name.toLowerCase());
      });
    }
    return this.users;
  }
}
