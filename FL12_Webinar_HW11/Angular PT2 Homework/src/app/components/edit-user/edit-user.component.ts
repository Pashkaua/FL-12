import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HttpService } from "../../servises/http.service";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  user: Object;
  id: number;
  constructor(private route: ActivatedRoute, private _http: HttpService) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id");
    this._http.getUsers().subscribe((data: any) => {
      data.forEach(el => {
        if (+el.id === this.id) {
          this.user = el;
          console.log(this.user);
        }
      });
    });
  }
}
