import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  impulseExperiences: string[] = [
    'experiences.card1.item1',
    'experiences.card1.item2',
    'experiences.card1.item3',
    'experiences.card1.item4',
    'experiences.card1.item5'
  ]

  sttpExperiences: string[] =[
    'experiences.card2.item1',
    'experiences.card2.item2',
    'experiences.card2.item3',
    'experiences.card2.item4'
  ]

  wordpressExperiences: string[] = [
    'experiences.card3.item1',
    'experiences.card3.item2',
    'experiences.card3.item3'
  ]

  constructor(private translate: TranslateService){ }

}
