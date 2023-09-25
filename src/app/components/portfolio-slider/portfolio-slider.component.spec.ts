import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioSliderComponent } from './portfolio-slider.component';

describe('PortfolioSliderComponent', () => {
  let component: PortfolioSliderComponent;
  let fixture: ComponentFixture<PortfolioSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioSliderComponent]
    });
    fixture = TestBed.createComponent(PortfolioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
