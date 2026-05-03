import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PortfolioSliderComponent } from '../../components/portfolio-slider/portfolio-slider.component';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
    imports: [PortfolioSliderComponent, TranslatePipe]
})
export class PortfolioComponent {
  constructor(){ }
}
