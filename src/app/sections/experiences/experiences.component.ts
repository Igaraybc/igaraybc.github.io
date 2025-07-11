import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experienceCards: {experienceList:string[], titleKey:string, companyKey:string}[] = [
    this.getExperienceInfo("card1", 5),
    this.getExperienceInfo("card2", 5),
    this.getExperienceInfo("card3", 4),
    this.getExperienceInfo("card4", 4)
  ];

  centerLineHeight: number = 0;
  color:string = '#FFCD1D';
  horizontalLines: {top:number, active:boolean}[] = [{top:0, active:false}];

  @ViewChild('experienceSection', {static: true}) section:ElementRef | undefined;

  @HostListener('window:scroll') onWindowScroll(){
    this.centerLineAnimated();
    this.horizontalLineAnimated();
  }

  centerLineAnimated(){
    const sectionTop = this.section?.nativeElement.offsetTop; 
    const sectionSize = this.section?.nativeElement.offsetHeight;
    const currentScroll = window.scrollY;

    if(currentScroll >= (sectionTop-30)){
      if(currentScroll-sectionTop+50 < sectionSize-230){
        this.centerLineHeight = (currentScroll - sectionTop) + 150;
      }
      else{
        this.centerLineHeight = sectionSize - 180;
      }
    }
    else if(currentScroll < (sectionTop+30)){
      //While I'm not in the experience section
      this.centerLineHeight = 0;
    }
  }

  horizontalLineAnimated(){
    const cardsContainer = this.section?.nativeElement.children[1];
    //The start position of each horizontal line
    const horLine1Top = cardsContainer.children[0].children[0].offsetTop;
    const horLine2Top = cardsContainer.children[1].children[0].offsetTop;
    const horLine3Top = cardsContainer.children[2].children[0].offsetTop;
    const horLine4Top = cardsContainer.children[3].children[0].offsetTop;

    this.horizontalLines = [
      {top: horLine1Top, active: false},
      {top: horLine2Top, active: false},
      {top: horLine3Top, active: false},
      {top: horLine4Top, active: false}
    ]

    let heightRef = window.innerWidth <= 520? this.centerLineHeight-10 : this.centerLineHeight+30
    
    this.horizontalLines.forEach(line => {
      line.active = heightRef >= line.top;
    })
  }

  constructor(private translate: TranslateService){ }

  getExperienceInfo(cardName:string, quantity:number){
    let experiences = [];
    for (let index = 1; index <= quantity; index++) {
      experiences.push(`experiences.${cardName}.item${index}`)
    }
    return {
      experienceList: experiences,
      titleKey: `experiences.${cardName}.title`,
      companyKey: `experiences.${cardName}.company`
    }
  }
}
