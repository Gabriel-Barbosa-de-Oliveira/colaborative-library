import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";

@Component({
  selector: "app-my-books",
  templateUrl: "./my-books.component.html",
  styleUrls: ["./my-books.component.scss"]
})
export class MyBooksComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user"));
  displayedColumns: string[] = ['name', 'loan'];
  dataSource: any;
  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.getMyBooks();
  }

  getMyBooks() {
    this._apiService.getMyBooks(this.user[0].id).subscribe(
      success => {
        this.dataSource = success;
        console.log(success);
      },
      error => {
        console.log(error);
      }
    );
  }
}
