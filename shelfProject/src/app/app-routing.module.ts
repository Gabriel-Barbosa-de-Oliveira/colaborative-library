import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./modules/auth/components/login/login.component";
import { RegistrationComponent } from "./modules/auth/components/registration/registration.component";
import { AuthGuard } from "./shared/guards/auth-guard.service";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: RegistrationComponent },
  {
    path: "estante",
    loadChildren: "./modules/manager/shelfs.module#ShelfsModule",
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
