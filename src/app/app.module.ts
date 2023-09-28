import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './sections/home/home.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { ContactComponent } from './sections/contact/contact.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillsSliderComponent } from './components/skills-slider/skills-slider.component';
import { PortfolioSliderComponent } from './components/portfolio-slider/portfolio-slider.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperiencesComponent,
    ContactComponent,
    SkillCardComponent,
    SkillsSliderComponent,
    PortfolioSliderComponent,
    ExperienceCardComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
