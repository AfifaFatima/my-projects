import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebheaderComponent } from './website/webheader/webheader.component';
import { SecondComponent } from './projects/second/second.component';
const routes: Routes = [
  {path:"app-webheader", component: WebheaderComponent},
  {path:"", redirectTo:"app-webheader", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
