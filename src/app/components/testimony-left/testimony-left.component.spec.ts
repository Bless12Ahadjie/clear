import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonyLeftComponent } from './testimony-left.component';

describe('TestimonyLeftComponent', () => {
  let component: TestimonyLeftComponent;
  let fixture: ComponentFixture<TestimonyLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonyLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonyLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
