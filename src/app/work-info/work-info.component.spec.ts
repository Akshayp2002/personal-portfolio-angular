import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInfoComponent } from './work-info.component';

describe('WorkInfoComponent', () => {
  let component: WorkInfoComponent;
  let fixture: ComponentFixture<WorkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
