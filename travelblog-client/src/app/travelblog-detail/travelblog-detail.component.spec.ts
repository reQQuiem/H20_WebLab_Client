import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelblogDetailComponent } from './travelblog-detail.component';

describe('TravelblogDetailComponent', () => {
  let component: TravelblogDetailComponent;
  let fixture: ComponentFixture<TravelblogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelblogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelblogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
