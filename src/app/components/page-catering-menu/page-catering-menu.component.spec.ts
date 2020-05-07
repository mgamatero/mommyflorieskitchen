import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCateringMenuComponent } from './page-catering-menu.component';

describe('PageCateringMenuComponent', () => {
  let component: PageCateringMenuComponent;
  let fixture: ComponentFixture<PageCateringMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCateringMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCateringMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
