import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersListComponent } from "./components/users-list/users-list.component";
import { NewUserComponent } from "./components/new-user/new-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";

const routes: Routes = [
  {
    path: "",
    component: UsersListComponent
    // data: { title: 'Heroes List' }
  },
  { path: "new", component: NewUserComponent },
  { path: "edit/:id", component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
