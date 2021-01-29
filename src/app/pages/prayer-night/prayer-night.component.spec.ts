import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerNightComponent } from './prayer-night.component';

describe('PrayerNightComponent', () => {
  let component: PrayerNightComponent;
  let fixture: ComponentFixture<PrayerNightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerNightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
