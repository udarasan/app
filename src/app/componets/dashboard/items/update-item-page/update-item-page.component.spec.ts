import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemPageComponent } from './update-item-page.component';

describe('UpdateItemPageComponent', () => {
  let component: UpdateItemPageComponent;
  let fixture: ComponentFixture<UpdateItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
