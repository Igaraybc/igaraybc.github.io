import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isMobile: boolean = false;

  constructor(private translate: TranslateService){ }

  @HostListener('window:resize', ['$event'])
  getElementSize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit(){
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 520;
  }
}
