import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { CreateBookComponent } from "./components/create-book/create-book.component";
import { MyBooksComponent } from "./components/my-books/my-books.component";
import { RentedBooksComponent } from "./components/rented-books/rented-books.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "novo-livro",
    component: CreateBookComponent
  },
  {
    path: "meus-livros",
    component: MyBooksComponent
  },
  {
    path: "alugados",
    component: RentedBooksComponent
  },
  {
    path: "livro/:id",
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelfsRoutingModule {}
