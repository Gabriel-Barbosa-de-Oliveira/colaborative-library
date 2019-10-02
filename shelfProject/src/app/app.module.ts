import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import ptBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./modules/auth/auth.module";
import { MaterialModule } from "./modules/material/material.module";
import { ToastrModule } from 'ngx-toastr';


registerLocaleData(ptBr)

@NgModule({
  declarations: [AppComponent],
  imports: [
    AuthModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: "pt_BR" },
  ]
})
export class AppModule {}
