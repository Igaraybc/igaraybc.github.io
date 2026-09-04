import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Slide = {
  image: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.css']
})
export class ProjectsSliderComponent {
  slides: Slide[] = [];
  currentIndex = 0;
  isTransitioning = false;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.get('projects.slides').subscribe((slides: Slide[]) => {
      this.slides = slides ?? [];
    });
  }

  get currentSlide(): Slide | undefined {
    return this.slides[this.currentIndex];
  }

  get sectionTitle(): string {
    return this.translate.instant('portfolio.title');
  }

  get sectionSubtitle(): string {
    return this.translate.instant('portfolio.subtitle');
  }

  private resetFrameScroll(): void {
    const frame = document.querySelector('.image-frame') as HTMLElement | null;
    if (frame) {
      frame.scrollTop = 0;
    }
  }

  private goToSlide(index: number): void {
    if (this.isTransitioning || this.slides.length === 0) {
      return;
    }

    this.isTransitioning = true;

    setTimeout(() => {
      this.currentIndex = index;

      requestAnimationFrame(() => {
        this.resetFrameScroll();
      });

      setTimeout(() => {
        this.isTransitioning = false;
      }, 220);
    }, 180);
  }

  prevSlide(): void {
    this.goToSlide(
      (this.currentIndex - 1 + this.slides.length) % this.slides.length
    );
  }

  nextSlide(): void {
    this.goToSlide((this.currentIndex + 1) % this.slides.length);
  }

  onDotClick(index: number): void {
    this.goToSlide(index);
  }

  onImageWheel(event: WheelEvent): void {
    if (this.isTransitioning || event.deltaY <= 0) return;

    const frame = event.currentTarget as HTMLElement;
    const remainingScroll =
      frame.scrollHeight - frame.clientHeight - frame.scrollTop;

    if (remainingScroll <= 1) {
      event.preventDefault();
      event.stopPropagation();
      this.nextSlide();
    }
  }
}