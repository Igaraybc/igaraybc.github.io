import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  imports: [ExperienceCardComponent, TranslatePipe]
})
export class ExperiencesComponent implements OnInit {
  experienceCards: { experienceList: string[], titleKey: string, companyKey: string }[] = [];

  centerLineHeight: number = 0;
  color: string = '#FFCD1D';
  horizontalLines: { top: number, active: boolean }[] = [{ top: 0, active: false }];

  @ViewChild('experienceSection', { static: true }) section: ElementRef | undefined;

  @HostListener('window:scroll') onWindowScroll() {
    this.centerLineAnimated();
    this.horizontalLineAnimated();
  }

  centerLineAnimated() {
    const section = this.section?.nativeElement as HTMLElement | undefined;
    if (!section) {
      this.centerLineHeight = 0;
      return;
    }

    const currentScroll = window.scrollY;
    const sectionTop = section.getBoundingClientRect().top + currentScroll;

    const title = section.querySelector('.title-text') as HTMLElement | null;
    const titleHeight = title ? title.getBoundingClientRect().height : 50;

    const cardsContainer = section.querySelector('.cards-container') as HTMLElement | null;
    const cardsContainerTop = cardsContainer
      ? cardsContainer.getBoundingClientRect().top + currentScroll
      : sectionTop + titleHeight;

    const startOffset = titleHeight + 30;

    if (currentScroll < sectionTop + startOffset) {
      this.centerLineHeight = 0;
      return;
    }

    const visualOffset = 150;
    const maxHeight = Math.max(0, section.offsetHeight - titleHeight - 120);

    this.centerLineHeight = Math.min(
      Math.max(currentScroll - cardsContainerTop + visualOffset, 0),
      maxHeight
    );
  }

  horizontalLineAnimated() {
    const section = this.section?.nativeElement as HTMLElement | undefined;
    const cardsContainer = section?.querySelector('.cards-container') as HTMLElement | null;

    if (!cardsContainer) {
      return;
    }

    const cardContainers = Array.from(
      cardsContainer.querySelectorAll<HTMLElement>('.exp-card-container')
    );

    this.horizontalLines = cardContainers.map((card) => {
      const horizontalLine = card.querySelector<HTMLElement>('.horizontal-line');

      return {
        top: horizontalLine ? horizontalLine.offsetTop : 0,
        active: false
      };
    });

    if (this.horizontalLines.length === 0) {
      return;
    }

    const heightRef =
      window.innerWidth <= 520
        ? this.centerLineHeight - 10
        : this.centerLineHeight + 30;

    this.horizontalLines.forEach((line) => {
      line.active = heightRef >= line.top;
    });
  }

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('experiences.cards').subscribe((cards: any[]) => {
      this.experienceCards = cards.map((card, cardIndex) =>
        this.getExperienceInfo({
          cardIndex,
          items: card.items ?? []
        })
      );
    });
  }

  getExperienceInfo(experience: { cardIndex: number; items: string[] }) {
    const cardKey = `experiences.cards.${experience.cardIndex}`;

    return {
      experienceList: experience.items.map((_, itemIndex) =>
        `${cardKey}.items.${itemIndex}`
      ),
      titleKey: `${cardKey}.title`,
      companyKey: `${cardKey}.company`
    };
  }
}
