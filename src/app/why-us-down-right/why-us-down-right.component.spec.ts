import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsDownRightComponent } from './why-us-down-right.component';

describe('WhyUsDownRightComponent', () => {
  let component: WhyUsDownRightComponent;
  let fixture: ComponentFixture<WhyUsDownRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsDownRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyUsDownRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
