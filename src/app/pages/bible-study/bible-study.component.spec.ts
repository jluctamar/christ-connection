import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleStudyComponent } from './bible-study.component';

describe('BibleStudyComponent', () => {
  let component: BibleStudyComponent;
  let fixture: ComponentFixture<BibleStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibleStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibleStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
