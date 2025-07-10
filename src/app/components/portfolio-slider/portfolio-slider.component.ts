import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio-slider',
  templateUrl: './portfolio-slider.component.html',
  styleUrls: ['./portfolio-slider.component.css']
})
export class PortfolioSliderComponent {
  
  @ViewChild('elementoRef', { static: true }) elementRef!: ElementRef;

  images: String[] = [
    "assets/img/ocosmodesign-screenshot.png",
    "assets/img/auriceliamassoterapia-screenshot.png",
    "assets/img/audisomca-screenshot.png"
  ]

  /*Slide variables*/
  translate: number = 0;
  currentSlideIndex: number = 0;
  widthSlides: String = '600px';
  heightSlides: String = '400px';

  overlayOpacity: number = 0;
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  getElementSize(event: any) {
    this.checkScreenSize();
    this.updateElementWidth();
  }

  ngAfterViewInit(){
    
    setTimeout(() => {
      this.checkScreenSize();
      this.updateElementWidth();
    })
  }

  updateElementWidth(){
    const elemento: HTMLElement = this.elementRef.nativeElement;
    const width = elemento.offsetWidth-100;
    const newWidth = Math.floor(width * 0.8);
    if(window.innerWidth <= 500){
      const width = elemento.offsetWidth;
      const newWidth = Math.floor(width * 0.8);
      this.widthSlides = `${newWidth}px`;
      this.heightSlides = `${0.69*newWidth}px`; 
    }
    else{
      if(newWidth > 640){
        this.widthSlides = '640px'; //max-width: 640px;
      }
      else{
        this.widthSlides = `${newWidth}px`;
      }
      if(0.67*newWidth > 400){
        this.heightSlides = '400px'; //max-height: 420px;
      }
      else{
        this.heightSlides = `${0.67*newWidth}px`;
      }
    
    }
  }

  
  onMouseScroll(){
    this.overlayOpacity = 0;
  }

  onMouseEnter(evento: any){
    if(evento.target.scrollTop < 100){
      /*the overlay opacity will be 1 only when user is on top of slide*/
      this.overlayOpacity = 1;
    }
  }

  onMouseLeave(){
    this.overlayOpacity = 0;
  }

  prevSlide(qntElements: number = 1){
    if(this.translate < 0){
      this.translate += 33.333*qntElements;
      this.currentSlideIndex--;
    }
  }

  nextSlide(qntElements: number = 1){
    if(this.translate > -66){
      this.translate -= 33.333*qntElements;
      this.currentSlideIndex++;
    }
  }

  onDotClick(index: number) {
    if(this.currentSlideIndex > index){
      this.prevSlide(this.currentSlideIndex-index);
    }
    else if(this.currentSlideIndex < index){
      this.nextSlide(index-this.currentSlideIndex);
    }
    this.currentSlideIndex = index;
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768; 
    if(this.isMobile){
      this.overlayOpacity = 0;
      const scrollTopValue = document.getElementsByClassName('img')[0].scrollTop;
      if(scrollTopValue < 100) {
        this.overlayOpacity = 1;
      }
    }
  }

}
