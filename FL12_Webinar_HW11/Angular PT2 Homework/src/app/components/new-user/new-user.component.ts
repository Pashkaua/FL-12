import { Component, OnInit } from "@angular/core";
import { User } from "../../interfaces/user";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  user: User = {
    id: Date.now(),
    name: "",
    email: "",
    phone: "",
    address: {},
    website: ""
  };

  constructor() {}

  ngOnInit(): void {}
}
