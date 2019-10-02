import { RouterTestingModule } from "@angular/router/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthModule } from "../../auth.module";
import { RegistrationComponent } from "./registration.component";
import { ToastrModule } from "ngx-toastr";

describe("RegistrationComponent", () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule, RouterTestingModule, NoopAnimationsModule, HttpClientTestingModule, ToastrModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should should create form Model", () => {
    component.createForm();
    expect(component.formModel != undefined).toBe(true);
  });

  it("should try to register with invalid email", () => {
    component.formModel.controls["email"].patchValue("teste");
    component.formModel.controls["user_name"].patchValue("teste");
    component.formModel.controls["password"].patchValue("teste");

    expect(component.formModel.valid).toBe(false);
  });

  it("should try to register with invalid name", () => {
    component.formModel.controls["email"].patchValue("teste@teste.com");
    component.formModel.controls["user_name"].patchValue("");
    component.formModel.controls["password"].patchValue("teste");

    expect(component.formModel.valid).toBe(false);
  });

  it("should try to register with invalid password", () => {
    component.formModel.controls["email"].patchValue("teste@teste.com");
    component.formModel.controls["user_name"].patchValue("teste");
    component.formModel.controls["password"].patchValue("");

    expect(component.formModel.valid).toBe(false);
  });

  it("should try to register with valid form", () => {
    component.formModel.controls["email"].patchValue("teste@teste.com");
    component.formModel.controls["user_name"].patchValue("teste");
    component.formModel.controls["password"].patchValue("teste");

    expect(component.formModel.valid).toBe(true);
  });
});
