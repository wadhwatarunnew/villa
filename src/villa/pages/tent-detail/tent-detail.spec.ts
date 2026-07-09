import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentDetail } from './tent-detail';

describe('TentDetail', () => {
  let component: TentDetail;
  let fixture: ComponentFixture<TentDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TentDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TentDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
