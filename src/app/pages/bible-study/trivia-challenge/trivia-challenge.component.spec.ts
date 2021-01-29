import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaChallengeComponent } from './trivia-challenge.component';

describe('TriviaChallengeComponent', () => {
  let component: TriviaChallengeComponent;
  let fixture: ComponentFixture<TriviaChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviaChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
