import { Component, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private translate: TranslateService){ 
    this.translate.use('pt');
  }

  currentLang: String = '';
  isMenuOpen: boolean = false;
  dropdownMenuOpened = false;
  @Output() OnMenuOpen = new EventEmitter<boolean>();

  ngOnInit(){
    const local = localStorage.getItem('lang');
    this.currentLang = local ? local : 'pt';
  }

  openDropdownMenu(){
    this.dropdownMenuOpened = this.dropdownMenuOpened ? false : true;
  }

  switchLanguage(lang: string) {
    localStorage.setItem('lang', lang);
    this.currentLang = lang;
    this.translate.use(lang);
    this.dropdownMenuOpened = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.OnMenuOpen.emit(this.isMenuOpen);
  }

  scrollToSection(section: string){
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      this.isMenuOpen = false;
    }
  }
}
