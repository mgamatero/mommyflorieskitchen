import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminEditComponent } from './page-admin-edit.component';

describe('PageAdminEditComponent', () => {
  let component: PageAdminEditComponent;
  let fixture: ComponentFixture<PageAdminEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdminEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
