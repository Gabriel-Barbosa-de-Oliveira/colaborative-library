import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/services/api.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss", "../../shared/registration.scss"]
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
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
      password: [null, Validators.required]
    });
  }

  clearNameInput() {
    this.formModel.controls["name"].reset();
  }

  redirectToRegistration() {
    this._router.navigate(["/cadastro"]);
  }

  onSubmitForm() {
    if (!this.formModel.valid) return;
    this.authenticateUser();
  }

  authenticateUser() {
    this._apiService.authenticateUser(this.formModel.value).subscribe(
      success => {
        if (success.length > 0){
          localStorage.setItem("user", JSON.stringify(success));
          this._router.navigate(["/estante"]);
        }else{
          this._toastrService.info("Usuário Não Encontrado", "Usuário");
        }
      },
      error => {
        this._toastrService.error("Erro ao autenticar usuário", "Usuário");
      }
    );
  }

  private setRootUser(success: any) {
    if (this.formModel.controls["name"].value.includes("admin")) {
      localStorage.setItem("isRootUser", JSON.stringify(true));
    } else {
      localStorage.setItem("isRootUser", JSON.stringify(false));
    }
  }
}
