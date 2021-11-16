import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemPageComponent } from './delete-item-page.component';

describe('DeleteItemPageComponent', () => {
  let component: DeleteItemPageComponent;
  let fixture: ComponentFixture<DeleteItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
