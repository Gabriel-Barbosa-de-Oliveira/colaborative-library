import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShelfsRoutingModule } from "./shelfs-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SystemStructureModule } from "../structure/system-structure/system-structure.module";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ShelfsRoutingModule,
    SystemStructureModule
  ]
})
export class ShelfsModule {}
