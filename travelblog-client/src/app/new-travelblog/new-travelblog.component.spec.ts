import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTravelblogComponent } from './new-travelblog.component';

describe('NewTravelblogComponent', () => {
  let component: NewTravelblogComponent;
  let fixture: ComponentFixture<NewTravelblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTravelblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTravelblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
