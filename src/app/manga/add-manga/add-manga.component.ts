import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MangaComponent } from '../manga.component';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-add-manga',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.css']
})
export class AddMangaComponent {
  FormData!: FormGroup;
  isloading!: boolean;
  @Input() mangas$ : any;

  constructor(
    private builder: FormBuilder,
    private manga: MangaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({

      mangaka: new FormControl(''),
      title: new FormControl(''),
      studio: new FormControl(''),
      genre: new FormControl(''),
      volumes: new FormControl(''),
      year: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
     
      mangaka: new FormControl(''),
      title: new FormControl(''),
      studio: new FormControl(''),
      genre: new FormControl(''),
      volumes: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.manga.postManga(formData).subscribe((res) => {
      this.toastr.success('Book Added 💃');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }
  }
  

