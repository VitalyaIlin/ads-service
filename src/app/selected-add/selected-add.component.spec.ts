import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAddComponent } from './selected-add.component';

describe('SelectedAddComponent', () => {
  let component: SelectedAddComponent;
  let fixture: ComponentFixture<SelectedAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
