import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-portfolio';
  constructor(private translate: TranslateService) {
    const local = localStorage.getItem('lang');
    if(local){
      translate.use(local);
    }
    else{
      translate.setDefaultLang('pt'); // Defina o idioma padrão
    }
  }

}
