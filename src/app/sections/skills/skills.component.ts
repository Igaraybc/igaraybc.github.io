import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SkillsSliderComponent } from '../../components/skills-slider/skills-slider.component';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    imports: [SkillsSliderComponent, TranslatePipe]
})
export class SkillsComponent {
  constructor(){ }
}
