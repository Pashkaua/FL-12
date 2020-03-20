import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { User } from "../../interfaces/user";

@Component({
  selector: "user-item",
  templateUrl: "./user-item.component.html",
  styleUrls: ["./user-item.component.css"]
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() deletedItem = new EventEmitter();
  // @Output() editItem = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteUser(user: User): void {
    this.deletedItem.emit(user);
  }
}
