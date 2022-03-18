import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFuncComponent } from './user-func.component';

describe('UserFuncComponent', () => {
  let component: UserFuncComponent;
  let fixture: ComponentFixture<UserFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
