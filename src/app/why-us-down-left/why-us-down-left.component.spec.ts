import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsDownLeftComponent } from './why-us-down-left.component';

describe('WhyUsDownLeftComponent', () => {
  let component: WhyUsDownLeftComponent;
  let fixture: ComponentFixture<WhyUsDownLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsDownLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyUsDownLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
