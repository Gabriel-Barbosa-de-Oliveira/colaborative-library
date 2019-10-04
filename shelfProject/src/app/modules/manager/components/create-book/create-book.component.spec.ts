import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateBookComponent } from "./create-book.component";
import { ShelfsModule } from "../../shelfs.module";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/modules/material/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ToastrModule } from "ngx-toastr";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("CreateBookComponent", () => {
  let component: CreateBookComponent;
  let fixture: ComponentFixture<CreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ShelfsModule,
        FormsModule,
        MaterialModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookComponent);
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

  it("should try to register new book invalid", () => {
    component.formModel.controls["name"].patchValue(null);
    component.formModel.controls["image"].patchValue("teste");
    component.formModel.controls["description"].patchValue("");
    component.formModel.controls["loan"].patchValue(false);

    expect(component.formModel.valid).toBe(false);
  });

  it("should try to register with valid form", () => {
    component.formModel.controls["name"].patchValue("teste");
    component.formModel.controls["image"].patchValue("teste");
    component.formModel.controls["description"].patchValue("teste");
    component.formModel.controls["loan"].patchValue(false);

    expect(component.formModel.valid).toBe(true);
  });
});
