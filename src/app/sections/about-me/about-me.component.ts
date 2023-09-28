import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  constructor(private translate: TranslateService){ }


  downloadCV(){
    const lang = this.translate.currentLang;
    const anchor = document.createElement('a');
    if(lang == 'pt'){
      const pdfUrl = 'assets/pdf/Curriculo.pdf'; 
      anchor.setAttribute('href', pdfUrl);
      anchor.setAttribute('download', 'Currículo - Ígara Yasmin Barbosa Cajazeiras.pdf'); 
    }
    else{
      const pdfUrl = 'assets/pdf/CV.pdf'; 
      anchor.setAttribute('href', pdfUrl);
      anchor.setAttribute('download', 'CV - Ígara Yasmin Barbosa Cajazeiras.pdf'); 
    }
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
}
