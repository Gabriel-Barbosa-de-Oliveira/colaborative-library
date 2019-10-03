import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/shared/services/api.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-book",
  templateUrl: "./create-book.component.html",
  styleUrls: ["./create-book.component.scss"]
})
export class CreateBookComponent implements OnInit {
  formModel: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _apiService: ApiService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formModel = this._fb.group({
      name: [null, Validators.required],
      image: [null, Validators.required],
      description: [null, Validators.required],
      loan: [false]
    });
  }

  postNewBook() {
    this._apiService.postNewBook(this.formModel.value).subscribe(
      success => {
        this._toastrService.success(
          "Livro Cadastrado com Sucesso",
          "Novo Livro"
        );
        this._router.navigate(["estante", "meus-livros"]);
      },
      error => {
        this._toastrService.error("Erro ao Cadastrar Novo Livro", "Novo Livro");
      }
    );
  }
}
