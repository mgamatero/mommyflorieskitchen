import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdmitEditActualDishComponent } from './page-admit-edit-actual-dish.component';

describe('PageAdmitEditActualDishComponent', () => {
  let component: PageAdmitEditActualDishComponent;
  let fixture: ComponentFixture<PageAdmitEditActualDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdmitEditActualDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdmitEditActualDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
