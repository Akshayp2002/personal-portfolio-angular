import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
