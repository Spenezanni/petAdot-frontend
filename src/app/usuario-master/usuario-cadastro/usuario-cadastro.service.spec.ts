import { TestBed } from '@angular/core/testing';

import { UsuarioCadastroService } from './usuario-cadastro.service';

describe('UsuarioCadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioCadastroService = TestBed.get(UsuarioCadastroService);
    expect(service).toBeTruthy();
  });
});
