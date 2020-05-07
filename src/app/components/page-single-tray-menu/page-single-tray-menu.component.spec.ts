import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleTrayMenuComponent } from './page-single-tray-menu.component';

describe('PageSingleTrayMenuComponent', () => {
  let component: PageSingleTrayMenuComponent;
  let fixture: ComponentFixture<PageSingleTrayMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSingleTrayMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSingleTrayMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
