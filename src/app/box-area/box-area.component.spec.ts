import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAreaComponent } from './box-area.component';

describe('BoxAreaComponent', () => {
  let component: BoxAreaComponent;
  let fixture: ComponentFixture<BoxAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
