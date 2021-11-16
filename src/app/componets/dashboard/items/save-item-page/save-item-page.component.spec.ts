import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveItemPageComponent } from './save-item-page.component';

describe('SaveItemPageComponent', () => {
  let component: SaveItemPageComponent;
  let fixture: ComponentFixture<SaveItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
