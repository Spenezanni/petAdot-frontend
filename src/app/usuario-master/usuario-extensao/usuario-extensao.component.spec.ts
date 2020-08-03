import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioExtensaoComponent } from './usuario-extensao.component';

describe('UsuarioExtensaoComponent', () => {
  let component: UsuarioExtensaoComponent;
  let fixture: ComponentFixture<UsuarioExtensaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioExtensaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioExtensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
