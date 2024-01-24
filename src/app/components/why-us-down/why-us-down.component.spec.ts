import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsDownComponent } from './why-us-down.component';

describe('WhyUsDownComponent', () => {
  let component: WhyUsDownComponent;
  let fixture: ComponentFixture<WhyUsDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyUsDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
