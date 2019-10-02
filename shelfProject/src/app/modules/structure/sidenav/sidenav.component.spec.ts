import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SidenavComponent } from "./sidenav.component";
import { SystemStructureModule } from "../system-structure/system-structure.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("SidenavComponent", () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SystemStructureModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;

    component.user = {
      user_name: "teste",
      password: "1246",
      id: "1",
      email: "teste@teste.com",
      createdAt: new Date()
    };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
