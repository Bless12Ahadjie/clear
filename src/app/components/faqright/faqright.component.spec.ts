import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQRightComponent } from './faqright.component';

describe('FAQRightComponent', () => {
  let component: FAQRightComponent;
  let fixture: ComponentFixture<FAQRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
