import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    imports: [TranslatePipe]
})
export class ContactComponent {
  classIcon = 'none';
  constructor(){ }
}
