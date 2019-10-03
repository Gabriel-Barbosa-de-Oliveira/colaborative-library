import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/shared/services/api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss", "../../shared/registration.scss"]
})
export class RegistrationComponent implements OnInit {
  public formModel: FormGroup;
  hide: boolean = true;
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formModel = this._fb.group({
      email: [
        null,
        Validators.compose([Validators.email, Validators.required])
      ],
      user_name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(15)
        ])
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(15)
        ])
      ]
    });
  }

  saveUser() {
    this._apiService.postNewBook(this.formModel.value).subscribe(
      success => {
        localStorage.setItem("user", JSON.stringify(success));
        this.setRootUser(success);
        this._router.navigate(["/estante"]);
      },
      error => {
        this._toastrService.error("Erro ao cadastrar novo usuário", "Usuário");

      }
    );
  }

  private setRootUser(success: any) {
    if (this.formModel.controls["email"].value.includes("admin")) {
      localStorage.setItem("isRootUser", JSON.stringify(true));
    } else {
      localStorage.setItem("isRootUser", JSON.stringify(false));
    }
  }

  redirectToLogin() {
    this._router.navigate(["/login"]);
  }
}
