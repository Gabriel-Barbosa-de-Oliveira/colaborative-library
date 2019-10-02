import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  
  user: any = JSON.parse(localStorage.getItem("user"));
  isRootUser: boolean = JSON.parse(localStorage.getItem("isRootUser"));

  constructor(private _router: Router) {}

  ngOnInit() {}

  logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("isRootUser");
    this._router.navigate(["/login"]);
  }
}
