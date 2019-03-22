import { TestBed } from '@angular/core/testing';

import {ClienteModuleService } from './cliente.service';

describe('ClienteModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:ClienteModuleService = TestBed.get(ClienteModuleService);
    expect(service).toBeTruthy();
  });
});
