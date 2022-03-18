import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoFuncComponent } from './endereco-func.component';

describe('EnderecoFuncComponent', () => {
  let component: EnderecoFuncComponent;
  let fixture: ComponentFixture<EnderecoFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecoFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
