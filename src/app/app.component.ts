import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from "./sections/skills/skills.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { ProjectsComponent } from './sections/projects/projects.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, HomeComponent, AboutMeComponent, SkillsComponent, ContactComponent, ExperiencesComponent, ProjectsComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-portfolio';
  constructor() { }

}
