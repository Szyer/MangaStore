import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {
  FormData!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private manga: MangaService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl(''),
      bookTitle: new FormControl(''),
      bookAuthor: new FormControl(''),
      rentedOn: new FormControl(''),
      returnDate: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      name: new FormControl(''),
      bookTitle: new FormControl(''),
      bookAuthor: new FormControl(''),
      rentedOn: new FormControl(''),
      returnDate: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.manga.rentManga(formData).subscribe((res) => {
      this.toastr.success('Successful 💃');
      setTimeout(() => {
        this.reset();
      }, 200);
    });
  }
}
