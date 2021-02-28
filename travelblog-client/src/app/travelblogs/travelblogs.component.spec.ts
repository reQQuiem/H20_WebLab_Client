import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelblogsComponent } from './travelblogs.component';

describe('TravelblogsComponent', () => {
  let component: TravelblogsComponent;
  let fixture: ComponentFixture<TravelblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
