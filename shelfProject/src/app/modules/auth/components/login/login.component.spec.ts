import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { LoginComponent } from "./login.component";
import { AuthModule } from "../../auth.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthModule,
        NoopAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create formModel", () => {
    component.createForm();
    expect(component.formModel != undefined).toBe(true);
  });

  it("should clear name input", () => {
    component.formModel.controls["name"].patchValue("teste");
    expect(component.formModel.controls["name"].value === "teste").toBe(true);
    component.clearNameInput();
    expect(component.formModel.controls["name"].value == null).toBe(true);
  });
});
