import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [],
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements AfterViewInit {
  @ViewChild('imageModalImage')
  modalImage!: ElementRef;
  @ViewChild('imageModal')
  modal!: ElementRef;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const images = this.elementRef.nativeElement.querySelectorAll('.img-thumbnail');

    images.forEach((image: { addEventListener: (arg0: string, arg1: () => void) => void; src: any; }) => {
      image.addEventListener('click', () => {
        this.modalImage.nativeElement.src = image.src;
        this.modal.nativeElement.classList.add('show');
      });
    });
  }

  closeModal(): void {
    this.modal.nativeElement.classList.remove('show');
  }
}