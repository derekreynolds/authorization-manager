import { TestBed, inject } from '@angular/core/testing';

import { ToolbarSetupService } from './toolbar-setup.service';

describe('ToolbarSetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarSetupService]
    });
  });

  it('should be created', inject([ToolbarSetupService], (service: ToolbarSetupService) => {
    expect(service).toBeTruthy();
  }));
});
