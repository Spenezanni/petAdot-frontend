import { TestBed } from '@angular/core/testing';

import { UserFuncService } from './user-func.service';

describe('UserFuncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFuncService = TestBed.get(UserFuncService);
    expect(service).toBeTruthy();
  });
});
