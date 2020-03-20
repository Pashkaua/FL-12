import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpService } from "../../servises/http.service";
import { Router } from "@angular/router";

import { User } from "../../interfaces/user";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  @Input() user: User;
  profileForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    address: new FormControl(""),
    website: new FormControl("")
  });

  users: any;

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit(): void {
    this._http.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  onSubmit() {
    let check = false;

    this.users.forEach(el => {
      if (+el.id === +this.user.id) {
        check = true;
      }
    });

    if (check) {
      this._http.upateUser(this.user.id, this.user);
      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 300);
    } else {
      this._http.postData(this.user);
      setTimeout(() => {
        this.router.navigate(["/"]);
      }, 300);
    }
  }
  cleanInput() {
    this.user.name = "";
    this.user.email = "";
    this.user.phone = "";
    this.user.address = {};
    this.user.website = "";
  }
}
