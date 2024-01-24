import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyRightComponent } from './testimony-right.component';

describe('TestimonyRightComponent', () => {
  let component: TestimonyRightComponent;
  let fixture: ComponentFixture<TestimonyRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonyRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
