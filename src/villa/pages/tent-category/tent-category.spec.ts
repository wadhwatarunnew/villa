import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentCategory } from './tent-category';

describe('TentCategory', () => {
  let component: TentCategory;
  let fixture: ComponentFixture<TentCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TentCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TentCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
