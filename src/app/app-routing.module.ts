import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SecondComponent } from './projects/second/second.component';
const routes: Routes = [
  {path:"app-second", component: SecondComponent},
  {path:"", redirectTo:"app-second", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
