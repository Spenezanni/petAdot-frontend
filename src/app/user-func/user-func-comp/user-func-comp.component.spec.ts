import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFuncCompComponent } from './user-func-comp.component';

describe('UserFuncCompComponent', () => {
  let component: UserFuncCompComponent;
  let fixture: ComponentFixture<UserFuncCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFuncCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFuncCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
