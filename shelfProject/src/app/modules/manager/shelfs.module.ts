import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShelfsRoutingModule } from "./shelfs-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SystemStructureModule } from "../structure/system-structure/system-structure.module";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateBookComponent } from './components/create-book/create-book.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { RentedBooksComponent } from './components/rented-books/rented-books.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateBookComponent,
    MyBooksComponent,
    RentedBooksComponent
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
