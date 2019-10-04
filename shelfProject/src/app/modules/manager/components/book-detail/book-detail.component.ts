import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.scss"]
})
export class BookDetailComponent implements OnInit {
  id: any;
  book: any;
  user = JSON.parse(localStorage.getItem("user"));
  constructor(
    private _toastrService: ToastrService,
    private _apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.readQueryString();
  }

  ngOnInit() {
    this.getSpecificBook();
  }

  readQueryString() {
    this.id = this.route.snapshot.params.id;
  }

  getSpecificBook() {
    this._apiService.getSpecificBook(this.id).subscribe(
      success => {
        this.book = success;
      },
      error => {
        this._toastrService.error("Erro ao buscar livro determinado", "Livro");
      }
    );
  }

  borrowBook() {
    this.book.loan = {
      userId: this.user[0].id,
      date: new Date()
    };

    this.putBook(this.book);
  }

  private putBook(book: any) {
    this._apiService.putBook(book).subscribe(
      success => {
        this.book = success;
        this._toastrService.success("Livro Emprestado com sucesso");
      },
      error => {
        book.loan = false;
        this._toastrService.error("Erro ao tentar atualizar", "Livro");
      }
    );
  }
}
