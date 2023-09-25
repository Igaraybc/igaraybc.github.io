import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills-slider',
  templateUrl: './skills-slider.component.html',
  styleUrls: ['./skills-slider.component.css']
})
export class SkillsSliderComponent {

  @ViewChild('elementoRef', { static: true })
  elementRef!: ElementRef;
  
  skills: {name: String, icon: String, fontAwesome?: boolean}[] = 
  [
    {name: 'Angular', icon: 'fa-angular'},
    {name: 'TypeScript', icon: 'assets/icons/typescript.svg',  fontAwesome: false},
    {name: 'JavaScript', icon: 'fa-square-js'},
    {name: 'Java', icon: 'fa-java'},
    {name: 'Github', icon: 'fa-github'},
    {name: 'HTML', icon: 'fa-html5'},
    {name: 'CSS', icon: 'fa-css3-alt'},
    {name: 'React.js', icon: 'fa-react'},
    {name: 'Wordpress', icon: 'fa-wordpress-simple'},
    {name: 'Vue.js', icon: 'fa-vuejs'},
    {name: 'Python', icon: 'fa-python'},
    {name: 'C', icon: 'assets/icons/C-brand.svg',  fontAwesome: false},
    {name: 'MongoDB', icon: 'assets/icons/mongodb.svg',  fontAwesome: false},
    {name: 'Bootstrap', icon: 'fa-bootstrap'},
    {name: 'MySQL', icon: 'assets/icons/mysql.svg',  fontAwesome: false},
    {name: 'Node.js', icon: 'fa-node-js'},
  ]
  

  widthSlides: String = '82%';
  translate: String = 'transalateX(0)';
  transition: String = 'all 0.5s';
  private intervalId:any;
  direction: number = 0;

  currentSlideIndex = 0;
  elements = 0;

  constructor(){ }

  @HostListener('window:resize', ['$event'])
  obterTamanhoElemento(event: any) {
    this.updateElement();
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.updateElement();
    })
  }

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy() {
    this.stopInterval();
  }

  startInterval(){
    this.intervalId = setInterval(() => this.nextSlide(), 3500);
  }

  stopInterval(){
    clearInterval(this.intervalId);
  }

  onMouseEnter(){
    this.stopInterval();
  }

  onMouseLeave() {
    this.startInterval();
  }
  
  updateElement(){
    const elemento: HTMLElement = this.elementRef.nativeElement;
    const width = elemento.offsetWidth-240;
    const nSlides = Math.floor(width / 250) ;
    this.widthSlides = `${250*(nSlides > 5 ? 5 : nSlides)}px`;
  }
  
  onDotClick(index: number) {
    console.log(`current: ${this.currentSlideIndex}, index: ${index}`);
    if(index == 0 && this.currentSlideIndex == this.skills.length-1){
      this.nextSlide();
    }
    else if(this.currentSlideIndex > index){
      this.prevSlide(this.currentSlideIndex-index);
    }
    else if(this.currentSlideIndex < index){
      this.nextSlide(index-this.currentSlideIndex);
    }
    //this.currentSlideIndex = index;

  }

  onTransitionEnd(event: any){
    if(this.direction == -1){
      const prevElements = this.skills.splice(0, this.elements);
      this.skills.push(...prevElements);
      this.transition = 'none';
      this.translate = `translateX(0)`;

      setTimeout(() => { 
        this.transition = 'all 0.5s';
      })

      if(this.currentSlideIndex == this.skills.length-1){
        this.currentSlideIndex = 0;
      }
      else{
        this.currentSlideIndex+=this.elements;
      }
    }
  }

  nextSlide(qntElements: number = 1){
    this.direction = -1;
    this.elements = qntElements;
  
    this.translate = `translateX(-${250*qntElements}px)`; 
  }

  prevSlide(qntElements: number = 1){
    this.direction = 1;

    const lastElements = this.skills.splice(-qntElements); 
    this.skills.unshift(...lastElements);
    this.transition = 'none';
    this.translate = `translateX(-${qntElements*250}px)`;

    setTimeout(() => {
      this.transition = 'all 0.5s';
      this.translate = `translateX(0px)`;
    });
    
    if(this.currentSlideIndex == 0){
      this.currentSlideIndex = this.skills.length-1;
    }
    else{
      this.currentSlideIndex-=qntElements;
    }

  }

}
