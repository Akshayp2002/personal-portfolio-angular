import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyComponent } from './spotify.component';

describe('SpotifyComponent', () => {
  let component: SpotifyComponent;
  let fixture: ComponentFixture<SpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
