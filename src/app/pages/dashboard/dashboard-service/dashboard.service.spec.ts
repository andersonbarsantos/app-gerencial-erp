import { TestBed } from '@angular/core/testing';

import { DashboardModuleService } from './dashboard.service';

describe('DashboardModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardModuleService = TestBed.get(DashboardModuleService);
    expect(service).toBeTruthy();
  });
});
