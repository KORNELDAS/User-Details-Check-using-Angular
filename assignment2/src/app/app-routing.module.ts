import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcardsComponent } from './allcards/allcards.component';
import { ListComponent } from './list/list.component';
import { DeatilComponent } from './deatil/deatil.component';

const routes: Routes = [
  {path:'allcards', component:AllcardsComponent},
  {path:'list', component:ListComponent},
  { path: '', redirectTo:'list', pathMatch:'full'},
  {path:'detail',component:DeatilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
