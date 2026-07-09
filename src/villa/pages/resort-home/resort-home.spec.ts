import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortHome } from './resort-home';

describe('ResortHome', () => {
  let component: ResortHome;
  let fixture: ComponentFixture<ResortHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResortHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResortHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
