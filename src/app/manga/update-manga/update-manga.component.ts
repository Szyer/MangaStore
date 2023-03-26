import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../manga.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-manga',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-manga.component.html',
  styleUrls: ['./update-manga.component.css']
})
export class UpdateMangaComponent {
 FormData!: FormGroup;
 isloading!: boolean;
 manga$!:any;
 id!:any;

 constructor(
  private builder: FormBuilder,
  private route: ActivatedRoute,
  private manga: MangaService,
  private toastr: ToastrService
 ){}

 ngOnInit(){
  this.route.paramMap.subscribe((params)=> {
    this.id=params.get('id');
    this.manga.getManga(this.id).subscribe((res)=>{
      this.manga$=res
      this.FormData.patchValue(this.updateFormValues())  
    })
  })

  this.FormData = this.builder.group({
    mangaka: new FormControl(''),
    studio: new FormControl(''),
    genre: new FormControl(''),
    year: new FormControl(''),
    title: new FormControl(''),
    volumes: new FormControl(''),
  })
 }

 onSubmit(formData:any){
  this.manga.updateManga(this.id, formData).subscribe(res=>{
    this.toastr.success("Updated the Manga Successfully")
    setTimeout(()=>{
      location.href = '/';
    },100);
  });
 }

 updateFormValues(){
  return{
    mangaka: this.manga$.mangaka,
    title: this.manga$.title,
    studio: this.manga$.studio,
    genre: this.manga$.genre,
    volumes: this.manga$.volumes,
    year: this.manga$.year,
  }
 }
}
