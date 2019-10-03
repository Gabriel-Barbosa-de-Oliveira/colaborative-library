import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { ToastrService } from "ngx-toastr";
import { IBook } from "src/app/models/book.interface";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  books: Array<IBook> = [];

  constructor(
    private _apiService: ApiService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this._apiService.getBooks().subscribe(
      success => {
        this.books = success;
      },
      error => {
        this._toastrService.error("Erro ao buscar livros", "Livros");
      }
    );
  }

  getLoanData(loan: any){
    if(!loan)
      return "Alugar"
    else  
      return "Alugado"
  }
}
