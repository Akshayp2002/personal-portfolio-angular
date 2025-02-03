import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItStartedComponent } from './how-it-started.component';

describe('HowItStartedComponent', () => {
  let component: HowItStartedComponent;
  let fixture: ComponentFixture<HowItStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItStartedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
