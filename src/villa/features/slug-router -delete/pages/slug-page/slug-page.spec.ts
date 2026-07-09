import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugPage } from './slug-page';

describe('SlugPage', () => {
  let component: SlugPage;
  let fixture: ComponentFixture<SlugPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlugPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
