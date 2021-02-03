import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchDeleteComponent } from './search-delete.component';

describe('SearchDeleteComponent', () => {
  let component: SearchDeleteComponent;
  let fixture: ComponentFixture<SearchDeleteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
