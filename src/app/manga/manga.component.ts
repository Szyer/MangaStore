import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMangaComponent } from './add-manga/add-manga.component';
import { RentComponent } from './rent/rent.component';
import { UpdateMangaComponent } from './update-manga/update-manga.component';
import { Router, RouterModule } from '@angular/router';
import { MangaService } from './manga.service';
import { ToastrService } from 'ngx-toastr';
 

@Component({
  selector: 'app-manga',
  standalone: true,
  imports: [CommonModule, RouterModule, AddMangaComponent, RentComponent, UpdateMangaComponent],
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
  providers: [MangaService]
})
export class MangaComponent {
  @Input() mangas$: any;
  
  constructor(
   private manga: MangaService,
   private toastr: ToastrService,
    private router: Router
   ){}

  ngOnInit(){
    this.getAllManga()
  }

  getAllManga(){
    this.manga.getMangas().subscribe((res)=>{
      this.mangas$ = res
    })
  }

  onDelete(id:any){
    this.manga.deleteManga(id).subscribe((res)=>{
      this.toastr.success("Deleted the Manga Successfully")
      setTimeout(()=>{
        location.reload()
      },1000);
      
    });
  }
  onUpdate(id:any){
    this.router.navigate([`/update/${id}`])
  }
}
