import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2Component } from './project-2.component';

describe('Project2Component', () => {
  let component: Project2Component;
  let fixture: ComponentFixture<Project2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
