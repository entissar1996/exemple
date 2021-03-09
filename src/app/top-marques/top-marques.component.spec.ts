import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMarquesComponent } from './top-marques.component';

describe('TopMarquesComponent', () => {
  let component: TopMarquesComponent;
  let fixture: ComponentFixture<TopMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMarquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
