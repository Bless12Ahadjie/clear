import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialLeftComponent } from './trial-left.component';

describe('TrialLeftComponent', () => {
  let component: TrialLeftComponent;
  let fixture: ComponentFixture<TrialLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrialLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
