import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-rented-books',
  templateUrl: './rented-books.component.html',
  styleUrls: ['./rented-books.component.scss']
})
export class RentedBooksComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user"));
  displayedColumns: string[] = ['name', 'loan'];
  dataSource: any;
  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.getMyBooks();
  }

  getMyBooks() {
    this._apiService.getBooks().subscribe(
      success => {
        this.dataSource = success.filter((data) => {
          return data.loan && data.loan.userId === this.user[0].id;
        });

      },
      error => {
        console.log(error);
      }
    );
  }
}
