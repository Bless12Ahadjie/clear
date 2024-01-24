import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialRightComponent } from './trial-right.component';

describe('TrialRightComponent', () => {
  let component: TrialRightComponent;
  let fixture: ComponentFixture<TrialRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrialRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrialRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
