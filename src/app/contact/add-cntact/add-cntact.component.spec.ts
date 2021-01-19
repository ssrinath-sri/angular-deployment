import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCntactComponent } from './add-cntact.component';

describe('AddCntactComponent', () => {
  let component: AddCntactComponent;
  let fixture: ComponentFixture<AddCntactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCntactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCntactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
