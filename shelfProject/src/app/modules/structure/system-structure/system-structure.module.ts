import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../material/material.module";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { StructureComponent } from "./structure/structure.component";

const COMPONENTS = [StructureComponent, SidenavComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [COMPONENTS]
})
export class SystemStructureModule {}
