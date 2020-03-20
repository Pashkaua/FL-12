import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { UserItemComponent } from "./components/user-item/user-item.component";
import { NewUserComponent } from "./components/new-user/new-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { FormComponent } from "./components/form/form.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserItemComponent,
    NewUserComponent,
    EditUserComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
