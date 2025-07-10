import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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

  websiteExperiences: string[] = [
    'experiences.card3.item1',
    'experiences.card3.item2',
    'experiences.card3.item3',
    'experiences.card3.item4'
  ]

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
      if(currentScroll-sectionTop+50 < sectionSize-180){
        this.centerLineHeight = (currentScroll - sectionTop) + 50;
      }
      else{
        this.centerLineHeight = sectionSize - 180;
      }
    }
    else if(currentScroll < (sectionTop+30)){
      //While I'm not in the experience section
      this.centerLineHeight = 0;
    }
    /*if(this.centerLineHeight >= sectionSize-149){
      //The center line top is 149
      const percYellow = ((sectionSize-149)*100)/this.centerLineHeight;
      const percBlack = 100 - percYellow;
      this.color = `linear-gradient(to bottom, #FFCD1D 0%, #FFCD1D ${percYellow}%, black ${percBlack}%, black 100%)`
    }*/
  }

  horizontalLineAnimated(){
    const cardsContainer = this.section?.nativeElement.children[1];
    //The start position of each horizontal line
    const horLine1Top = cardsContainer.children[0].children[0].offsetTop;
    const horLine2Top = cardsContainer.children[1].children[0].offsetTop;
    const horLine3Top = cardsContainer.children[2].children[0].offsetTop;

    this.horizontalLines = [
      {top: horLine1Top, active: false},
      {top: horLine2Top, active: false},
      {top: horLine3Top, active: false}
    ]
    
    this.horizontalLines.forEach(line => {
      line.active = this.centerLineHeight-6 >= line.top;
    })
    
  }

  constructor(private translate: TranslateService){ }
}
