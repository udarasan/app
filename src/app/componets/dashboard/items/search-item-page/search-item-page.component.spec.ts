import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemPageComponent } from './search-item-page.component';

describe('SearchItemPageComponent', () => {
  let component: SearchItemPageComponent;
  let fixture: ComponentFixture<SearchItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
