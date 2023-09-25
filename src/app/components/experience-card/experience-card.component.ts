import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() title: String = '';
  @Input() experienceList: string[] = []

  constructor(private translate: TranslateService){ }

  translateItem(item: string) {
    return this.translate.instant(item);
  }

}

