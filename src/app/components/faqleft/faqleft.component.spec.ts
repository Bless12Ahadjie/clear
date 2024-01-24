import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQLeftComponent } from './faqleft.component';

describe('FAQLeftComponent', () => {
  let component: FAQLeftComponent;
  let fixture: ComponentFixture<FAQLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FAQLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FAQLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
