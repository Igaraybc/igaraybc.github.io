import { Component } from '@angular/core';
import { ProjectsSliderComponent } from '../../components/projects-slider/projects-slider.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [ProjectsSliderComponent]
})
export class ProjectsComponent {}