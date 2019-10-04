import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { ToastrService } from "ngx-toastr";
import { IBook } from "src/app/models/book.interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  books: Array<IBook> = [];
  user = JSON.parse(localStorage.getItem("user"));
  constructor(
    private _router: Router,
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

  getLoanData(loan: any) {
    if (!loan) return "Emprestar";
    else return "Emprestado";
  }

  redirectToDetails(id: number) {
    this._router.navigate(["estante/livro/" + id]);
  }

  borrowBook(book) {
    book.loan = {
      userId: this.user[0].id,
      date: new Date()
    };

    this.putBook(book);
  }

  private putBook(book: any) {
    this._apiService.putBook(book).subscribe(success => {
      let index = this.books.findIndex(obj => success === obj);
      this.books[index] = success;
      this._toastrService.success("Livro Emprestado com sucesso");
    }, error => {
      book.loan = false;
      this._toastrService.error("Erro ao tentar atualizar", "Livro");
    });
  }
}
