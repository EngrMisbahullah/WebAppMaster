import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOfourComponent } from './four-ofour.component';

describe('FourOfourComponent', () => {
  let component: FourOfourComponent;
  let fixture: ComponentFixture<FourOfourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourOfourComponent]
    });
    fixture = TestBed.createComponent(FourOfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
