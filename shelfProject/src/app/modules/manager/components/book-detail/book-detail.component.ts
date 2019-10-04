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
        this._toastrService.error('Erro ao buscar livro determinado', 'Livro')
      }
    );
  }
}
