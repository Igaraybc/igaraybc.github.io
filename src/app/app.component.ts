import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from "./sections/skills/skills.component";
import { PortfolioComponent } from "./sections/portfolio/portfolio.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { ExperiencesComponent } from './sections/experiences/experiences.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, HomeComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent, ExperiencesComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-portfolio';
  constructor() { }

}
