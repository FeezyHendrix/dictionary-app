import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcomponentComponent } from './indexcomponent.component';

describe('IndexcomponentComponent', () => {
  let component: IndexcomponentComponent;
  let fixture: ComponentFixture<IndexcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
