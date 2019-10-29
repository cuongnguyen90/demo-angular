import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowComponent} from "./products/show/show.component";
import {AddProductComponent} from "./products/add-product/add-product.component";


const routes: Routes = [
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'add',
    component: AddProductComponent
  },
  {
    path: 'edit/:id',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
