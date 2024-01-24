import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRightComponent } from './hero-right.component';

describe('HeroRightComponent', () => {
  let component: HeroRightComponent;
  let fixture: ComponentFixture<HeroRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
