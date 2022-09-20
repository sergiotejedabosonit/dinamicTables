import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondTableComponent } from './components/second-table/second-table.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';

const routes: Routes = [
  {
    path: "",
  component: SecondTableComponent    
  },
  {
    path: "pokemon/:id",
    component: PokeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
