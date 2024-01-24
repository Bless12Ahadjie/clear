import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUsTopComponent } from './why-us-top.component';

describe('WhyUsTopComponent', () => {
  let component: WhyUsTopComponent;
  let fixture: ComponentFixture<WhyUsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyUsTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyUsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
