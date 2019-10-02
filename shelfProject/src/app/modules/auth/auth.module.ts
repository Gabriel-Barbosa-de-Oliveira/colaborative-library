import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../material/material.module";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { RegistrationStructureComponent } from "./components/registration-structure/registration-structure.component";

const COMPONENTS = [
  LoginComponent,
  RegistrationStructureComponent,
  RegistrationComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [...COMPONENTS]
})
export class AuthModule {}
