import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAcessoComponent } from './usuario-acesso.component';

describe('UsuarioAcessoComponent', () => {
  let component: UsuarioAcessoComponent;
  let fixture: ComponentFixture<UsuarioAcessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAcessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
