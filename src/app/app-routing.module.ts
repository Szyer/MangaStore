import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangaComponent } from './manga/manga.component';
import { AddMangaComponent } from './manga/add-manga/add-manga.component';
import { UpdateMangaComponent } from './manga/update-manga/update-manga.component';
import { RentComponent } from './manga/rent/rent.component';

const routes: Routes = [
  {path:'', component: MangaComponent, pathMatch:'prefix'},
  {
    path: 'add-manga',
    component: AddMangaComponent
  },
  {
    path: 'update/:id',
    component: UpdateMangaComponent
  },
  {
    path: 'rent',
    component: RentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MangaComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
